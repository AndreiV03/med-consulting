import Link from "next/link";
import { BiSearch } from "react-icons/bi";

import styles from "../styles/components/menu.module.scss";

type Props = {
  isMenuOpen: boolean
};

const links: string[] = ["specializations", "services", "prices", "team", "contact"];

const Menu = ({ isMenuOpen }: Props): JSX.Element => {
  return (
    <div className={!isMenuOpen ? styles.menu : `${styles.menu} ${styles.active}`} aria-hidden={!isMenuOpen}>
      <div className={styles.links}>
        {links.map(link => (
          <Link href={link} key={link}>
            <a className={styles.link}>{link.charAt(0).toUpperCase() + link.slice(1)}</a>
          </Link>
        ))}
      </div>

      <div className={styles.buttons}>
        <Link href="/search">
          <a className={styles.search}><BiSearch /></a>
        </Link>

        <Link href="/login">
          <a className={styles.login}>Log in</a>
        </Link>

        <Link href="/register">
          <a className={styles.register}>Sign up</a>
        </Link>
      </div>
    </div>
  );
}

export default Menu;