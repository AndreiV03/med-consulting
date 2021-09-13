import Image from "next/image";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import { BiSearch } from "react-icons/bi";

import styles from "../styles/components/header.module.scss";
import Logo from "../public/logo.png";
import MenuButton from "./MenuButtons";

type Props = {
  isMenuOpen: boolean,
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>
};

const Header = ({ isMenuOpen, setIsMenuOpen }: Props): JSX.Element => {
  const handleButtonClick = (): void => setIsMenuOpen(!isMenuOpen);
  
  return (
    <header className={!isMenuOpen ? styles.header : `${styles.header} ${styles.active}`}>
      <div className={styles.logo}>
        <Image src={Logo} alt="" width={167} height={57} />
      </div>

      <div className={styles.container}>
        <div className={!isMenuOpen ? styles.links : `${styles.links} ${styles.active}`}>
          <Link href="/login">
            <a >Log in</a>
          </Link>

          <Link href="/register">
            <a className={styles.register}>Sign up</a>
          </Link>

          <Link href="/search">
            <a className={styles.search}><BiSearch /></a>
          </Link>
        </div>

        <div className={!isMenuOpen ? styles.button : `${styles.button} ${styles.active}`} onClick={handleButtonClick}>
          <MenuButton isMenuOpen={isMenuOpen} />
        </div>
      </div>
    </header>
  );
}

export default Header;