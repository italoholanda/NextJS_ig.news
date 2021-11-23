import styles from "./styles.module.scss";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <div>
          <img src="/images/logo.svg" alt="Ig.news" />
        </div>
        <nav>
          <ul>
            <li><a className={styles.active}>Home</a></li>
            <li><a>Posts</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
