import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

import styles from "../styles/pages/services.module.scss";

const Services: NextPage = () => {
  return (
    <>
      <div className={styles.hero_section}>
        <h4 className={styles.subtitle}>Servicii</h4>
        <h1 className={styles.title}>Suntem baza dvs. de asistență medicală</h1>
        <div className={styles.button}>Înregistrează-te astăzi</div>
      </div>

      <div className={styles.content}>
        <div className={styles.top_section}>
          <h2>Un partener adevărat în sănătatea ta</h2>
          <p>La Med Consulting, avem grijă de orice, de la boli comune la boli cronice și probleme de sănătate mintală. Îngrijirea primară nu este destinată doar bolnavilor - suntem aici și pentru a vă ajuta să preveniți bolile și să vă mențineți starea de sănătate optimă. Ne vom lua întotdeauna timpul să vă ascultăm, să vă respectăm părerea și să ne îngrijim ca o persoană întreagă.</p>
        </div>
        
        <div className={styles.items}>
          <div className={styles.item}>
            <div className={styles.wrapper}><Image src="/images/items/image-two.jpg" alt="" layout="fill" /></div>

            <div className={styles.container}>
              <h3>Condiții cronice</h3>
              <p>De la artrită la zaspopatie, vom diagnostica și vă vom ajuta să gestionați o gamă enormă de afecțiuni și, atunci când este necesar, vă vom conecta la specialiști și instituții de talie mondială pentru a vă asigura că aveți cea mai bună îngrijire posibilă.</p>

              <Link href="/services" passHref>
                <a className={styles.link}>
                  <span>Află mai multe</span>
                  <IoIosArrowForward />
                </a>
              </Link>
            </div>
          </div>

          <div className={styles.item}>
            <div className={styles.wrapper}><Image src="/images/items/image-two.jpg" alt="" layout="fill" /></div>

            <div className={styles.container}>
              <h3>Condiții cronice</h3>
              <p>De la artrită la zaspopatie, vom diagnostica și vă vom ajuta să gestionați o gamă enormă de afecțiuni și, atunci când este necesar, vă vom conecta la specialiști și instituții de talie mondială pentru a vă asigura că aveți cea mai bună îngrijire posibilă.</p>

              <Link href="/services" passHref>
                <a className={styles.link}>
                  <span>Află mai multe</span>
                  <IoIosArrowForward />
                </a>
              </Link>
            </div>
          </div>
          
          <div className={styles.item}>
            <div className={styles.wrapper}><Image src="/images/items/image-two.jpg" alt="" layout="fill" /></div>

            <div className={styles.container}>
              <h3>Condiții cronice</h3>
              <p>De la artrită la zaspopatie, vom diagnostica și vă vom ajuta să gestionați o gamă enormă de afecțiuni și, atunci când este necesar, vă vom conecta la specialiști și instituții de talie mondială pentru a vă asigura că aveți cea mai bună îngrijire posibilă.</p>

              <Link href="/services" passHref>
                <a className={styles.link}>
                  <span>Află mai multe</span>
                  <IoIosArrowForward />
                </a>
              </Link>
            </div>
          </div>

          <div className={styles.item}>
            <div className={styles.wrapper}><Image src="/images/items/image-two.jpg" alt="" layout="fill" /></div>

            <div className={styles.container}>
              <h3>Condiții cronice</h3>
              <p>De la artrită la zaspopatie, vom diagnostica și vă vom ajuta să gestionați o gamă enormă de afecțiuni și, atunci când este necesar, vă vom conecta la specialiști și instituții de talie mondială pentru a vă asigura că aveți cea mai bună îngrijire posibilă.</p>

              <Link href="/services" passHref>
                <a className={styles.link}>
                  <span>Află mai multe</span>
                  <IoIosArrowForward />
                </a>
              </Link>
            </div>
          </div>

          <div className={styles.item}>
            <div className={styles.wrapper}><Image src="/images/items/image-two.jpg" alt="" layout="fill" /></div>

            <div className={styles.container}>
              <h3>Condiții cronice</h3>
              <p>De la artrită la zaspopatie, vom diagnostica și vă vom ajuta să gestionați o gamă enormă de afecțiuni și, atunci când este necesar, vă vom conecta la specialiști și instituții de talie mondială pentru a vă asigura că aveți cea mai bună îngrijire posibilă.</p>

              <Link href="/services" passHref>
                <a className={styles.link}>
                  <span>Află mai multe</span>
                  <IoIosArrowForward />
                </a>
              </Link>
            </div>
          </div>

          <div className={styles.item}>
            <div className={styles.wrapper}><Image src="/images/items/image-two.jpg" alt="" layout="fill" /></div>

            <div className={styles.container}>
              <h3>Condiții cronice</h3>
              <p>De la artrită la zaspopatie, vom diagnostica și vă vom ajuta să gestionați o gamă enormă de afecțiuni și, atunci când este necesar, vă vom conecta la specialiști și instituții de talie mondială pentru a vă asigura că aveți cea mai bună îngrijire posibilă.</p>

              <Link href="/services" passHref>
                <a className={styles.link}>
                  <span>Află mai multe</span>
                  <IoIosArrowForward />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;