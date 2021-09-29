import Link from "next/link";
import { useEffect, Dispatch, SetStateAction } from "react";
import { BiSearch } from "react-icons/bi";

import styles from "../styles/components/Header.module.scss";
import useScroll from "../hooks/useScroll";
import Logo from "../assets/Logo";

type Props = {
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
};

const Header = ({ isMenuOpen, setIsMenuOpen }: Props): JSX.Element => {
  const { scrollY } = useScroll();

  const handleHeaderClasses = (): string => `${styles.header} ${isMenuOpen && styles.menu_active} ${scrollY > 66 && styles.fixed} ${scrollY > 100 && styles.scrolled}`;

  useEffect(() => {
    const bodyElement: HTMLElement = document.body;

    if (isMenuOpen) bodyElement.style.overflow = "hidden";
    else bodyElement.style.overflow = "visible";
  }, [isMenuOpen]);

  return (
    <header className={handleHeaderClasses()}>
      <Link href="/" passHref>
        <div className={!isMenuOpen ? styles.logo : `${styles.logo} ${styles.menu_active}`} onClick={() => setIsMenuOpen(false)}><Logo /></div>
      </Link>

      <div className={styles.container}>
        <div className={!isMenuOpen ? styles.links : `${styles.links} ${styles.menu_active}`}>
          <Link href="/specializations" passHref><a className={styles.link}>Specializations</a></Link>
          <Link href="/services" passHref><a className={styles.link}>Services</a></Link>
          <Link href="/prices" passHref><a className={styles.link}>Prices</a></Link>
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