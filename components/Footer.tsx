import { RiFacebookFill, RiTwitterFill, RiYoutubeFill, RiInstagramFill } from "react-icons/ri";

import styles from "../styles/components/footer.module.scss";
import Link from "./Link";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.prefooter}>
        <h2>Intră în contact direct</h2>
        
        <div className={styles.buttons}>
          <div className={styles.button_fill}>Whatsapp</div>
          <div className={styles.button_fill}>Email</div>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.links}>
          <Link href="/about-us" className={styles.link}>Despre noi</Link>
          <Link href="/services" className={styles.link}>Servicii</Link>
          <Link href="/hospitals" className={styles.link}>Spitale</Link>
          <Link href="/prices" className={styles.link}>Prețuri</Link>
          <Link href="/contact" className={styles.link}>Contact</Link>
          <Link href="/" className={styles.link}>Media Center - Anulat</Link>
          <Link href="/" className={styles.link}>Blog</Link>
          <Link href="/" className={styles.link}>Recenzii</Link>
          <Link href="/account" className={styles.link}>Cont</Link>
        </div>

        <div className={styles.social_media}>
          <Link href="/" className={styles.link}><RiFacebookFill /></Link>
          <Link href="/" className={styles.link}><RiTwitterFill /></Link>
          <Link href="/" className={styles.link}><RiYoutubeFill /></Link>
          <Link href="/" className={styles.link}><RiInstagramFill /></Link>
        </div>
      </div>

      <div className={styles.bottom_section}>
        <div className={styles.links}>
          <Link href="/" className={styles.link}>Termeni și condiții membru</Link>
          <Link href="/" className={styles.link}>Termeni medicali</Link>
          <Link href="/" className={styles.link}>Politică de confidențialitate</Link>
        </div>

        <p>©2021 martyr.studio. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;