import styles from "./styles.module.scss";
import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";

export function SignInButton() {
  const isUserLoggedIn = true;

  return isUserLoggedIn ? (
    <button className={styles.buttonContainer}>
      <FaGithub color="#04d361" />
      Ítalo Holanda
      <FiX color="#737380" />
    </button>
  ) : (
    <button className={styles.buttonContainer}>
      <FaGithub color="#eba417" />
      Sign in with Github
    </button>
  );
}
