import type { NextPage } from "next";

import styles from "../styles/pages/services.module.scss";

const Services: NextPage = () => {
  return (
    <>
      <div className={styles.hero_section}>
        <h4 className={styles.subtitle}>Servicii</h4>
        <h1 className={styles.title}>Suntem baza dvs. de asistență medicală</h1>
        <h3 className={styles.button}>Înregistrează-te astăzi</h3>
      </div>

      <div className={styles.content}>
        <div className={styles.top_section}>
          <h2 className={styles.title}>Un partener adevărat în sănătatea ta</h2>
          <p>La Med Consulting, avem grijă de orice, de la boli comune la boli cronice și probleme de sănătate mintală. Îngrijirea primară nu este destinată doar bolnavilor - suntem aici și pentru a vă ajuta să preveniți bolile și să vă mențineți starea de sănătate optimă. Ne vom lua întotdeauna timpul să vă ascultăm, să vă respectăm părerea și să ne îngrijim ca o persoană întreagă.</p>
        </div>
      </div>
    </>
  );
}

export default Services;