import Link from "next/link";
import { RiFacebookFill, RiTwitterFill, RiYoutubeFill, RiInstagramFill } from "react-icons/ri";

import styles from "../styles/components/footer.module.scss";

const Footer = (): JSX.Element => {
  return (
    <footer className={styles.footer}>
      <div className={styles.top_section}>
        <h2>Get started with MedConsulting today</h2>
        
        <div className={styles.buttons}>
          <div className={styles.button_fill}>Membership sign-up</div>
          <div className={styles.button_fill}>For employers</div>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.links}>
          <Link href="/about-us" passHref><a className={styles.link}>About us</a></Link>
          <Link href="/services" passHref><a className={styles.link}>Services</a></Link>
          <Link href="/hospitals" passHref><a className={styles.link}>Hospitals</a></Link>
          <Link href="/prices" passHref><a className={styles.link}>Prices</a></Link>
          <Link href="/contact" passHref><a className={styles.link}>Contact</a></Link>
          <Link href="/about-us" passHref><a className={styles.link}>Media Center</a></Link>
          <Link href="/services" passHref><a className={styles.link}>Blog</a></Link>
          <Link href="/hospitals" passHref><a className={styles.link}>Investor relations</a></Link>
          <Link href="/prices" passHref><a className={styles.link}>Practice integrations</a></Link>
          <Link href="/contact" passHref><a className={styles.link}>Membership</a></Link>
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
          <Link href="/" passHref><a className={styles.link}>Membership terms of service</a></Link>
          <Link href="/" passHref><a className={styles.link}>Medical terms of service</a></Link>
          <Link href="/" passHref><a className={styles.link}>Privacy policy</a></Link>
          <Link href="/" passHref><a className={styles.link}>HIPAA NPP</a></Link>
          <Link href="/" passHref><a className={styles.link}>Employee Privacy Notice</a></Link>
          <Link href="/" passHref><a className={styles.link}>Code of Business Conduct</a></Link>
        </div>

        <p>©2021 1Life Healthcare, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;