import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";

import styles from "../styles/components/header.module.scss";
import useScroll from "../hooks/useScroll";
import Logo from "../assets/Logo";

interface Props {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header = ({ isMenuOpen, setIsMenuOpen }: Props): JSX.Element => {
  const [isBackgroundPurple, setIsBackgroundPurple] = useState<boolean>(false);

  const { scrollY } = useScroll();
  const router = useRouter();

  useEffect(() => {
    setIsBackgroundPurple(false);
    if (router.pathname === "/hospitals")
      setIsBackgroundPurple(true);
  }, [router.route]);

  return (
    <header className={`${styles.header} ${isMenuOpen ? styles.menu_active : ""} ${scrollY > 66 ? styles.fixed : ""} ${scrollY > 100 ? styles.scrolled : ""}
    ${isBackgroundPurple ? styles.background_purple : ""}`}>
      <Link href="/" passHref>
        <div className={styles.logo} onClick={() => setIsMenuOpen(false)}><Logo /></div>
      </Link>

      <div className={styles.container}>
        <div className={styles.links}>
          <Link href="/about-us" passHref><a className={styles.link}>Despre noi</a></Link>
          <Link href="/services" passHref><a className={styles.link}>Servicii</a></Link>
          <Link href="/hospitals" passHref><a className={styles.link}>Spitale</a></Link>
          <Link href="/prices" passHref><a className={styles.link}>Prețuri</a></Link>
          <Link href="/contact" passHref><a className={styles.link}>Contact</a></Link>
        </div>

        <div className={styles.links}>
          <Link href="/login" passHref><a>Autentificare</a></Link>
          <Link href="/register" passHref><a className={styles.register}>Înregistrare</a></Link>
          <Link href="/search" passHref><a className={styles.search}><BiSearch /></a></Link>
        </div>

        <div className={styles.button} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <div className={styles.hamburger} />
        </div>
      </div>
    </header>
  );
}

export default Header;