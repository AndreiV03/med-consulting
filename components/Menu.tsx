import Link from "next/link";
import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { BiSearch } from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";

import styles from "../styles/components/Menu.module.scss";
import useScroll from "../hooks/useScroll";

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

  const handleLink = (): void => {
    setIsServicesDropdownOpen(false);
    setIsMenuOpen(false);
  }

  const { scrollY } = useScroll();
  useEffect(() => {}, [scrollY]);

  return (
    <div className={!isMenuOpen ? styles.menu : `${styles.menu} ${styles.active}`} aria-hidden={!isMenuOpen}
      style={{ padding: `calc(66px + ${66 - scrollY > 0 ? 66 - scrollY : 0}px + 2rem) 7vw 0` }}
    >
      <div className={styles.content}>
        <div className={styles.links}>
          <Link href="/about-us" passHref><a className={styles.link} onClick={handleLink}>About us</a></Link>

          <div className={styles.dropdown}>
            <h3 className={styles.link} onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}>Services</h3>

            <AnimatePresence>
              {isServicesDropdownOpen && (
                <motion.ul className={styles.container} aria-hidden={!isServicesDropdownOpen} initial="initial" animate="animate" exit="exit" variants={dropdownVariants}>
                  <Link href="/services" passHref><li className={styles.link} onClick={handleLink}>Cardiology</li></Link>
                  <Link href="/services" passHref><li className={styles.link} onClick={handleLink}>Oncology</li></Link>
                  <Link href="/services" passHref><li className={styles.link} onClick={handleLink}>Gastroenterology</li></Link>
                  <Link href="/services" passHref><li className={styles.link} onClick={handleLink}>Obstetrics and Gynaecology</li></Link>
                  <Link href="/services" passHref><li className={styles.link} onClick={handleLink}>Orthopaedics</li></Link>
                  <Link href="/services" passHref><li className={styles.link} onClick={handleLink}>Ophthalmology</li></Link>
                  <Link href="/services" passHref><li className={styles.link} onClick={handleLink}>Other Services</li></Link>
                </motion.ul>
              )}
            </AnimatePresence>
          </div>

          <Link href="/hospitals" passHref><a className={styles.link} onClick={handleLink}>Hospitals</a></Link>
          <Link href="/prices" passHref><a className={styles.link} onClick={handleLink}>Prices</a></Link>
          <Link href="/contact" passHref><a className={styles.link} onClick={handleLink}>Contact</a></Link>
        </div>

        <div className={styles.buttons}>
          <Link href="/search" passHref><a className={styles.search}><BiSearch /></a></Link>
          <Link href="/account" passHref><a className={styles.mini_link}>Account</a></Link>
          <Link href="/login" passHref><a className={styles.link}>Log in</a></Link>
          <Link href="/register" passHref><a className={styles.link}>Sign up</a></Link>
        </div>
      </div>
    </div>
  );
}

export default Menu;