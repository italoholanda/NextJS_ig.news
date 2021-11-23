import Head from "next/head";
import styles from "./home.module.scss";

export default function Home() {
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
            Get acess to all News <br /> for <strong>$9.90 month</strong>
          </p>
        </section>

        <img src="/images/avatar.svg" alt="girl coding" />
      </main>
    </>
  );
}
