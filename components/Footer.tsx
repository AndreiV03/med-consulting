import Link from "next/link";
import { RiFacebookFill, RiTwitterFill, RiYoutubeFill, RiInstagramFill } from "react-icons/ri";

import styles from "../styles/components/footer.module.scss";

export const Prefooter = (): JSX.Element => {
  return (
    <div className={styles.prefooter}>
      <h2>Intră în contact direct</h2>
      
      <div className={styles.buttons}>
        <div className={styles.button_fill}>Contactează-ne prin Whatsapp</div>
        <div className={styles.button_fill}>Email</div>
      </div>
    </div>
  );
}

const Footer = (): JSX.Element => {
  return (
    <footer className={styles.footer}>
      <Prefooter />

      <div className={styles.content}>
        <div className={styles.links}>
          <Link href="/about-us" passHref><a className={styles.link}>Despre noi</a></Link>
          <Link href="/services" passHref><a className={styles.link}>Servicii</a></Link>
          <Link href="/hospitals" passHref><a className={styles.link}>Spitale</a></Link>
          <Link href="/prices" passHref><a className={styles.link}>Prețuri</a></Link>
          <Link href="/contact" passHref><a className={styles.link}>Contact</a></Link>
          <Link href="/about-us" passHref><a className={styles.link}>Media Center - Anulat</a></Link>
          <Link href="/services" passHref><a className={styles.link}>Blog</a></Link>
          <Link href="/hospitals" passHref><a className={styles.link}>Recenzii</a></Link>
          <Link href="/prices" passHref><a className={styles.link}>Cont</a></Link>
        </div>

        <div className={styles.social_media}>
          <Link href="/" passHref><a className={styles.link}><RiFacebookFill /></a></Link>
          <Link href="/" passHref><a className={styles.link}><RiTwitterFill /></a></Link>
          <Link href="/" passHref><a className={styles.link}><RiYoutubeFill /></a></Link>
          <Link href="/" passHref><a className={styles.link}><RiInstagramFill /></a></Link>
        </div>
      </div>

      <div className={styles.bottom_section}>
        <div className={styles.links}>
          <Link href="/" passHref><a className={styles.link}>Termeni și condiții membru</a></Link>
          <Link href="/" passHref><a className={styles.link}>Termeni medicali</a></Link>
          <Link href="/" passHref><a className={styles.link}>Politică de confidențialitate</a></Link>
        </div>

        <p>©2021 martyr.studio. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;