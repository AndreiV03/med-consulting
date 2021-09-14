import Link from "next/link";

import styles from "../../styles/pages/home.module.scss";

const SectionOne = (): JSX.Element => {
  return (
    <div className={styles.hero_section}>
      <div className={styles.column}>
        <h1 className={styles.title}>Care whenever you need it, in person or in your PJs</h1>
        <p>Same/next-day primary care designed around you and your life. Most insurance accepted.</p>
        <div className={styles.button_fill}>Sign up today</div>
        <div className={styles.button_outline}>Gift a membership</div>

        <Link href="/">
          <a className={styles.link}>Sponsored membership? Click here</a>
        </Link>
      </div>
    </div>
  );
}

export default SectionOne;