import styles from "./styles.module.scss";

export function SubscribeButton({priceId : string}) {
  return (
    <button type="button" className={styles.subscribeButton}>
      Subscribe Now
    </button>
  );
}
