import type { NextPage } from "next";
import Link from "next/link";

import styles from "../../styles/pages/hospitals.module.scss";

const Hospitals: NextPage = () => {
  return (
    <div className={styles.content}>
      <h2>Spitale</h2>

      <div className={styles.links}>
        <Link href="/hospitals/akh" passHref><a className={styles.link}>AKH</a></Link>
        <Link href="/hospitals/privatklinik-dobling" passHref><a className={styles.link}>Privatklinik Döbling</a></Link>
        <Link href="/hospitals/privatklinik-goldenes-kreuz" passHref><a className={styles.link}>Privatklinik Goldenes Kreuz</a></Link>
        <Link href="/hospitals/privatklinik-confraternitat" passHref><a className={styles.link}>Privatklinik Confraternität</a></Link>
        <Link href="/hospitals/wiener-privatklinik" passHref><a className={styles.link}>Wiener Privatklinik</a></Link>
        <Link href="/hospitals/rudolfinerhaus-hospital" passHref><a className={styles.link}>Rudolfinerhaus Hospital</a></Link>
      </div>
    </div>
  );
}

export default Hospitals;