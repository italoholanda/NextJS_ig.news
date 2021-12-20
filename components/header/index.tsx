import React from "react";
import { SignInButton } from "../SignInButton";
import styles from "./styles.module.scss";
import { ActiveLink } from "../ActiveLink.tsx";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <div>
          <img src="/images/logo.svg" alt="Ig.news" />
        </div>
        <nav>
          <ul>
            <li>
              <ActiveLink href="/" activeClassName={styles.active}>
                <a>Home</a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/posts" activeClassName={styles.active}>
                <a>Posts</a>
              </ActiveLink>
            </li>
          </ul>
        </nav>
        <SignInButton />
      </div>
    </header>
  );
}
