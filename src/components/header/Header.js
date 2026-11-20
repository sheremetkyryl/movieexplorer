import styles from "./Header.module.css";
export default function Header({ children }) {
  const links = ["Home", "Movies", "Favorites"];
  /* Вбудовані стилі – стилі які задаються через атрибут style напряму */
  let headerStyle;
  const isAuthorized = true;

  if (isAuthorized) {
    headerStyle = { backgroundColor: "black" };
  } else {
    headerStyle = { backgroundColor: "grey" };
  }
  return (
    //Ванільний CSS - стилі, які застосовуються через класи
    <header className={styles.header}>
      <div className={`container ${styles.container}`}>
        <a className={styles.logo} href="/">
          Movie<span>Explorer</span>
        </a>
        <nav>
          <ul className={styles.list}>
            {links.length > 0 &&
              links.map((link, index) => (
                <li key={index}>
                  <a className={styles.link} href={`#${link}`}>
                    {link}{" "}
                  </a>
                </li>
              ))}
          </ul>
        </nav>
        
        {children}
      </div>
    </header>
  );
}
