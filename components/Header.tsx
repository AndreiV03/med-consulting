import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import { BiSearch } from "react-icons/bi";

import styles from "../styles/components/header.module.scss";
import useScroll from "../hooks/useScroll";
import Logo from "../assets/Logo";

interface Props {
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
};

const Header = ({ isMenuOpen, setIsMenuOpen }: Props): JSX.Element => {
  const { scrollY } = useScroll();

  return (
    <header className={`${styles.header} ${isMenuOpen ? styles.menu_active : ""} ${scrollY > 66 ? styles.fixed : ""} ${scrollY > 100 ? styles.scrolled : ""}`}>
      <Link href="/" passHref>
        <div className={!isMenuOpen ? styles.logo : `${styles.logo} ${styles.menu_active}`} onClick={() => setIsMenuOpen(false)}><Logo /></div>
      </Link>

      <div className={styles.container}>
        <div className={!isMenuOpen ? styles.links : `${styles.links} ${styles.menu_active}`}>
          <Link href="/services" passHref><a className={styles.link}>Services</a></Link>
          <Link href="/hospitals" passHref><a className={styles.link}>Hospitals</a></Link>
          <Link href="/prices" passHref><a className={styles.link}>Prices</a></Link>
          <Link href="/contact" passHref><a className={styles.link}>Contact</a></Link>
        </div>

        <div className={!isMenuOpen ? styles.links : `${styles.links} ${styles.menu_active}`}>
          <Link href="/login" passHref><a>Log in</a></Link>
          <Link href="/register" passHref><a className={styles.register}>Sign up</a></Link>
          <Link href="/search" passHref><a className={styles.search}><BiSearch /></a></Link>
        </div>

        <div className={!isMenuOpen ? styles.button : `${styles.button} ${styles.menu_active}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <div className={styles.hamburger} />
        </div>
      </div>
    </header>
  );
}

export default Header;