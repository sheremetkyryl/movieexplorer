import styles from "./Footer.module.css";

export default function Footer() {
  const links = ["Home", "Movies", "Favorites"];

  return (
    <footer className={styles.footer}>
      <div className={styles.footerBox}>
        <div className={styles.footerContainer}>
          <a className={styles.logo} href="/">
            🎬Movie<span>Explorer</span>
          </a>
          <p className={styles.subtitle}>Discover your next favorite movie.</p>
        </div>

        <ul className={styles.footerList}>
          {links.length > 0
            ? links.map((link) => (
                <li className={styles.footerItem} key={link}>
                  {link}
                </li>
              ))
            : "links not found"}
        </ul>
      </div>
      <div>
        <p className={styles.copyright}>© 2026 MovieExplorer</p>
      </div>
    </footer>
  );
}
