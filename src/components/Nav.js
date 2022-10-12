import { Link } from "react-router-dom";
import styles from "./Nav.module.css";

function Nav() {
  return (
    <header className={styles.header}>
      <Link className={styles.title} to="/">
        Top Rank Movies
      </Link>
    </header>
  );
}

export default Nav;
