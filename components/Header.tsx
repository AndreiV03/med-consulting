import { useContext } from "react";
import { BiSearch } from "react-icons/bi";

import { LayoutContext } from "../contexts/LayoutContext";

import styles from "../styles/components/header.module.scss";
import Link from "./Link";
import Logo from "../assets/Logo";

const Header: React.FC = () => {
  const { isMenuOpen: [isMenuOpen, setIsMenuOpen], scrollY } = useContext(LayoutContext);

  return (
    <header>
      <div className={`${styles.header} ${isMenuOpen ? styles.menu_active : ""} ${scrollY > 66 ? styles.fixed : ""}`}>
        <Link href="/">
          <div className={styles.logo} onClick={() => setIsMenuOpen(false)}><Logo /></div>
        </Link>

        <div className={styles.container}>
          <div className={styles.links}>
            <Link href="/about-us" className={styles.link}>Despre noi</Link>
            <Link href="/services" className={styles.link}>Servicii</Link>
            <Link href="/hospitals" className={styles.link}>Spitale</Link>
            <Link href="/prices" className={styles.link}>Prețuri</Link>
            <Link href="/contact" className={styles.link}>Contact</Link>
          </div>

          <div className={styles.links}>
            <Link href="/login" className={styles.link}>Autentificare</Link>
            <Link href="/register" className={`${styles.link} ${styles.cta}`}>Înregistrare</Link>
            <Link href="/search" className={`${styles.link} ${styles.search}`}><BiSearch /></Link>
          </div>

          <div className={styles.button} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <div className={styles.hamburger} />
          </div>
        </div>
      </div>

      <div className={styles.background} />
    </header>
  );
}

export default Header;