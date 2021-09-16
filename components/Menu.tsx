import Link from "next/link";
import { useState, Dispatch, SetStateAction } from "react";
import { BiSearch } from "react-icons/bi";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";

import styles from "../styles/components/Menu.module.scss";

type Props = {
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
};

const dropdownVariants = {
  initial: {
    height: 0,
    transition: {
      duration: 0.2,
      ease: "easeIn",
      stiffness: 0
    }
  }, 
  animate: {
    height: "auto",
    transition: {
      duration: 0.2,
      ease: "easeIn",
      stiffness: 0
    }
  },
  exit: {
    height: 0,
    transition: {
      duration: 0.2,
      ease: "easeIn",
      stiffness: 0
    }
  }
};

const Menu = ({ isMenuOpen, setIsMenuOpen }: Props): JSX.Element => {
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState<boolean>(false);

  const handleLinkClick = (): void => {
    setIsServicesDropdownOpen(false);
    setIsMenuOpen(false);
  }

  return (
    <div className={!isMenuOpen ? styles.menu : `${styles.menu} ${styles.active}`} aria-hidden={!isMenuOpen}>
      <AnimateSharedLayout>
        <div className={styles.links}>
          <Link href="/specializations" passHref>
            <a className={styles.link} onClick={handleLinkClick}>Specializations</a>
          </Link>

          <div className={styles.dropdown}>
            <h3 className={styles.link} onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}>Services</h3>

            <AnimatePresence>
              {isServicesDropdownOpen && (
                <motion.ul className={styles.container} aria-hidden={!isServicesDropdownOpen} layout initial="initial" animate="animate" exit="exit" variants={dropdownVariants}>
                  <Link href="/services" passHref>
                    <li className={styles.link} onClick={handleLinkClick}>Wellness and prevention</li>
                  </Link>

                  <Link href="/services" passHref>
                    <li className={styles.link} onClick={handleLinkClick}>Everyday care</li>
                  </Link>

                  <Link href="/services" passHref>
                    <li className={styles.link} onClick={handleLinkClick}>Chronic conditions</li>
                  </Link>

                  <Link href="/services" passHref>
                    <li className={styles.link} onClick={handleLinkClick}>Mental health</li>
                  </Link>
                </motion.ul>
              )}
            </AnimatePresence>
          </div>

          <Link href="/prices" passHref>
            <motion.a className={styles.link} layout onClick={handleLinkClick}>Prices</motion.a>
          </Link>
        </div>

        <motion.div className={styles.buttons} layout>
          <Link href="/search" passHref>
            <a className={styles.search}><BiSearch /></a>
          </Link>

          <Link href="/login" passHref>
            <a className={styles.login}>Log in</a>
          </Link>

          <Link href="/register" passHref>
            <a className={styles.register}>Sign up</a>
          </Link>
        </motion.div>
      </AnimateSharedLayout>
    </div>
  );
}

export default Menu;