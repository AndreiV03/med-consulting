import { useContext, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";

import { LayoutContext } from "../contexts/LayoutContext";
import { dropdownVariants } from "../variants/MenuVariants";

import styles from "../styles/components/menu.module.scss";
import Link from "./Link";

const Menu: React.FC = () => {
  const { isMenuOpen: [isMenuOpen, setIsMenuOpen], scrollY } = useContext(LayoutContext);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState<boolean>(false);

  const handleLinkClick = () => {
    setIsServicesDropdownOpen(false);
    setIsMenuOpen(false);
  }

  return (
    <div className={`${styles.menu} ${isMenuOpen ? styles.menu_active : ""} ${scrollY > 66 ? styles.fixed : ""}`} aria-hidden={!isMenuOpen}>
      <div className={styles.content}>
        <div className={styles.links}>
          <Link href="/about-us" className={styles.link} onClick={handleLinkClick}>Despre noi</Link>

          <div className={styles.dropdown}>
            <h3 className={styles.link} onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}>Servicii</h3>

            <AnimatePresence>
              {isServicesDropdownOpen && (
                <motion.ul className={styles.container} aria-hidden={!isServicesDropdownOpen} initial="initial" animate="animate" exit="exit" variants={dropdownVariants}>
                  <Link href="/services" className={styles.link} onClick={handleLinkClick}><li>Chirurgie generală</li></Link>
                  <Link href="/services" className={styles.link} onClick={handleLinkClick}><li>Chirurgie pediatrică</li></Link>
                  <Link href="/services" className={styles.link} onClick={handleLinkClick}><li>Ortopedie traumatologie</li></Link>
                  <Link href="/services" className={styles.link} onClick={handleLinkClick}><li>Cardiologie</li></Link>
                  <Link href="/services" className={styles.link} onClick={handleLinkClick}><li>Oncologie</li></Link>
                  <Link href="/services" className={styles.link} onClick={handleLinkClick}><li>Medicină internă</li></Link>
                  <Link href="/services" className={styles.link} onClick={handleLinkClick}><li>Radiologie</li></Link>
                  <Link href="/services" className={styles.link} onClick={handleLinkClick}><li>Inflirtații</li></Link>
                  <Link href="/services" className={styles.link} onClick={handleLinkClick}><li>Intervenții vasculare</li></Link>
                </motion.ul>
              )}
            </AnimatePresence>
          </div>

          <Link href="/hospitals" className={styles.link} onClick={handleLinkClick}>Spitale</Link>
          <Link href="/prices" className={styles.link} onClick={handleLinkClick}>Prețuri</Link>
          <Link href="/contact" className={styles.link} onClick={handleLinkClick}>Contact</Link>
        </div>

        <div className={styles.buttons}>
          <Link href="/search" className={styles.mini_link} onClick={handleLinkClick}><BiSearch /></Link>
          <Link href="/account" className={styles.mini_link} onClick={handleLinkClick}>Contul meu</Link>
          <Link href="/login" className={styles.mini_link} onClick={handleLinkClick}>Autentificare</Link>
          <Link href="/register" className={styles.mini_link} onClick={handleLinkClick}>Înregistrare</Link>
        </div>
      </div>
    </div>
  );
}

export default Menu;