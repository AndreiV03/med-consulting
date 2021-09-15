import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import { BiSearch } from "react-icons/bi";

import styles from "../styles/components/Header.module.scss";
import Logo from "../assets/Logo";
import MenuButton from "./MenuButton";

type Props = {
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
};

const Header = ({ isMenuOpen, setIsMenuOpen }: Props): JSX.Element => {
  return (
    <header className={!isMenuOpen ? styles.header : `${styles.header} ${styles.active}`}>
      <div className={!isMenuOpen ? styles.background : `${styles.background} ${styles.active}`} />

      <Link href="/" passHref>
        <div className={!isMenuOpen ? styles.logo : `${styles.logo} ${styles.active}`} onClick={() => setIsMenuOpen(false)}><Logo /></div>
      </Link>

      <div className={styles.container}>
        <div className={!isMenuOpen ? styles.links : `${styles.links} ${styles.active}`}>
          <Link href="/login" passHref>
            <a >Log in</a>
          </Link>

          <Link href="/register" passHref>
            <a className={styles.register}>Sign up</a>
          </Link>

          <Link href="/search" passHref>
            <a className={styles.search}><BiSearch /></a>
          </Link>
        </div>

        <div className={!isMenuOpen ? styles.button : `${styles.button} ${styles.active}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <MenuButton isMenuOpen={isMenuOpen} />
        </div>
      </div>
    </header>
  );
}

export default Header;