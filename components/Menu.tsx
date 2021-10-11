import Link from "next/link";
import { useState, Dispatch, SetStateAction } from "react";
import { BiSearch } from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";

import styles from "../styles/components/menu.module.scss";
import useScroll from "../hooks/useScroll";
import { menuDropdownVariants } from "../data/variants";

interface Props {
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
};

const Menu = ({ isMenuOpen, setIsMenuOpen }: Props): JSX.Element => {
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState<boolean>(false);
  const { scrollY } = useScroll();

  const handleLink = () => {
    setIsServicesDropdownOpen(false);
    setIsMenuOpen(false);
  }

  return (
    <div className={!isMenuOpen ? styles.menu : `${styles.menu} ${styles.active}`} aria-hidden={!isMenuOpen}
      style={{ padding: `calc(66px + ${66 - scrollY > 0 ? 66 - scrollY : 0}px + 2rem) 7vw 0` }}
    >
      <div className={styles.content}>
        <div className={styles.links}>
          <Link href="/about-us" passHref><a className={styles.link} onClick={handleLink}>Despre noi</a></Link>

          <div className={styles.dropdown}>
            <h3 className={styles.link} onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}>Servicii</h3>

            <AnimatePresence>
              {isServicesDropdownOpen && (
                <motion.ul className={styles.container} aria-hidden={!isServicesDropdownOpen} initial="initial" animate="animate" exit="exit" variants={menuDropdownVariants}>
                  <Link href="/services" passHref><li className={styles.link} onClick={handleLink}>Chirurgie generală</li></Link>
                  <Link href="/services" passHref><li className={styles.link} onClick={handleLink}>Chirurgie pediatrică</li></Link>
                  <Link href="/services" passHref><li className={styles.link} onClick={handleLink}>Ortopedie traumatologie</li></Link>
                  <Link href="/services" passHref><li className={styles.link} onClick={handleLink}>Cardiologie</li></Link>
                  <Link href="/services" passHref><li className={styles.link} onClick={handleLink}>Oncologie</li></Link>
                  <Link href="/services" passHref><li className={styles.link} onClick={handleLink}>Medicină internă</li></Link>
                  <Link href="/services" passHref><li className={styles.link} onClick={handleLink}>Radiologie</li></Link>
                  <Link href="/services" passHref><li className={styles.link} onClick={handleLink}>Inflirtații</li></Link>
                  <Link href="/services" passHref><li className={styles.link} onClick={handleLink}>Intervenții vasculare</li></Link>
                </motion.ul>
              )}
            </AnimatePresence>
          </div>

          <Link href="/hospitals" passHref><a className={styles.link} onClick={handleLink}>Spitale</a></Link>
          <Link href="/prices" passHref><a className={styles.link} onClick={handleLink}>Prețuri</a></Link>
          <Link href="/contact" passHref><a className={styles.link} onClick={handleLink}>Contact</a></Link>
        </div>

        <div className={styles.buttons}>
          <Link href="/search" passHref><a className={styles.search} onClick={handleLink}><BiSearch /></a></Link>
          <Link href="/account" passHref><a className={styles.mini_link} onClick={handleLink}>Contul meu</a></Link>
          <Link href="/login" passHref><a className={styles.link} onClick={handleLink}>Autentificare</a></Link>
          <Link href="/register" passHref><a className={styles.link} onClick={handleLink}>Înregistrare</a></Link>
        </div>
      </div>
    </div>
  );
}

export default Menu;