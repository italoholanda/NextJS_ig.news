import { GetStaticProps } from "next";
import Head from "next/head";
import { env } from "process";
import { SubscribeButton } from "../components/SubscribeButton";
import styles from "./home.module.scss";

interface homeProps {
  product: {
    priceId: string;
    amount: number;
  };
}

export default function Home({ product }: homeProps) {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome</span>
          <h1>
            News about <br /> the <strong>React world</strong>
          </h1>
          <p>
            Get acess to all News <br /> for{" "}
            <strong>${product.amount} month</strong>
          </p>
          <SubscribeButton priceId={product.priceId} />
        </section>

        <img src="/images/avatar.svg" alt="girl coding" />
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  /*=====================================================/
    SSG Note:
    ---------   
    This content will be revalidated every 24 hours
  /=====================================================*/

  const stripe = require("stripe")(env.STRIPE_API_KEY);

  const price = await stripe.prices.retrieve("price_1Jz2rXLVS21dphyRBw4WxAla", {
    expand: ["product"],
  });

  const product = {
    priceId: price.id,
    amount: (price.unit_amount / 100).toFixed(2),
  };

  return {
    props: { product },
    revalidate: 60 * 60 * 24, // 24 Hours
  };
};
