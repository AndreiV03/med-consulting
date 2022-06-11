import type { NextPage } from "next";

import styles from "../styles/pages/contact.module.scss";

const Contact: NextPage = () => {
  return (
    <>
      <div className={styles.hero_section}>
        <h4 className={styles.subtitle}>Contact</h4>
        <h1 className={styles.title}>Intră în legătură</h1>
      </div>

      <div className={styles.content}>
        <h2>Lorem ipsum dolor sit amet</h2>
        <div className={styles.container}>
          <h3>Lorem ipsum</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula mattis pharetra.</p>
        </div>
        <div className={styles.container}>
          <h4>Lorem ipsum dolor sit amet</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula mattis pharetra. Fusce neque sapien, iaculis sit amet turpis vel, porta dictum lacus.</p>
        </div>
        <div className={styles.container}>
          <h4>Lorem ipsum dolor sit amet</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula mattis pharetra. Fusce neque sapien, iaculis sit amet turpis vel, porta dictum lacus.</p>
        </div>
        <div className={styles.container}>
          <h4>Lorem ipsum dolor sit amet</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula mattis pharetra. Fusce neque sapien, iaculis sit amet turpis vel, porta dictum lacus.</p>
        </div>
        <div className={styles.container}>
          <h4>Lorem ipsum dolor sit amet</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula mattis pharetra. Fusce neque sapien, iaculis sit amet turpis vel, porta dictum lacus.</p>
        </div>
        <div className={styles.container}>
          <h3>Lorem ipsum dolor</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula mattis pharetra.</p>
        </div>

        <h2>Contact information</h2>
        <div className={styles.container}>
          <h3>Office Headquarters</h3>
        </div>
        <div className={styles.container}>
          <h4>Pelikangasse 15, Austria</h4>
          <p>1090 Wien</p>
        </div>
      </div>
    </>
  );
}

export default Contact;
