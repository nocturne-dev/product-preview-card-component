import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles["footer__attribution"]}>
        Challenge by{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.frontendmentor.io?ref=challenge"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/nocturne-dev"
        >
          Frankii Tang
        </a>
        .
      </div>
    </footer>
  );
};

export default Footer;
