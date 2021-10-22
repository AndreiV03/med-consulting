import type { NextPage } from "next";
import Image from "next/image";
import { motion } from "framer-motion";

import styles from "../styles/pages/about-us.module.scss";
import { heroSectionVariants } from "../variants/AboutUsPageVariants";

const AboutUs: NextPage = () => {
  return (
    <>
      <div className={styles.hero_section}>
        <motion.div className={styles.container} initial="initial" animate="animate" variants={heroSectionVariants}>
          <h4 className={styles.subtitle}>Despre noi</h4>
          <h1 className={styles.title}>Lorem ipsum dolor sit amet</h1>
          <div className={styles.button}>Înregistrează-te astăzi</div>
        </motion.div>
      </div>

      <div className={styles.content}>
        <div className={styles.top_section}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt pellentesque neque. Donec tristique libero nunc, eget commodo lacus cursus eget. Nunc posuere a justo vitae efficitur. Cras suscipit lectus metus, eget malesuada risus ultrices placerat. Proin hendrerit arcu et tellus faucibus semper.</p>
        </div>
        
        <div className={styles.items}>
          <div className={styles.item}>
            <div className={styles.wrapper}>
              <Image src="https://www.onemedical.com/media/images/media-about-1_jWULUF1.original.jpg" alt="" layout="fill" />
            </div>

            <div className={styles.container}>
              <h3>Lorem ipsum dolor sit amet</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt pellentesque neque. Donec tristique libero nunc, eget commodo lacus cursus eget. Nunc posuere a justo vitae efficitur. Cras suscipit lectus metus, eget malesuada risus ultrices placerat. Proin hendrerit arcu et tellus faucibus semper. Ut sapien arcu, feugiat a nisl nec, fermentum mattis nisl. Maecenas molestie elit eget metus mattis, vel auctor est cursus. Praesent egestas lorem id lectus mattis, nec fringilla libero imperdiet.</p>
            </div>
          </div>

          <div className={styles.item}>
            <div className={styles.wrapper}>
              <Image src="https://www.onemedical.com/media/images/Screen_Shot_2021-06-17_at_11.12.07_AM.original.png" alt="" layout="fill" />
            </div>

            <div className={styles.container}>
              <h3>Lorem ipsum dolor sit amet</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt pellentesque neque. Donec tristique libero nunc, eget commodo lacus cursus eget. Nunc posuere a justo vitae efficitur. Cras suscipit lectus metus, eget malesuada risus ultrices placerat. Proin hendrerit arcu et tellus faucibus semper. Ut sapien arcu, feugiat a nisl nec, fermentum mattis nisl. Maecenas molestie elit eget metus mattis, vel auctor est cursus. Praesent egestas lorem id lectus mattis, nec fringilla libero imperdiet.</p>
            </div>
          </div>
          
          <div className={styles.item}>
            <div className={styles.wrapper}>
              <Image src="https://www.onemedical.com/media/images/media-about-1_jWULUF1.original.jpg" alt="" layout="fill" />
            </div>

            <div className={styles.container}>
              <h3>Lorem ipsum dolor sit amet</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt pellentesque neque. Donec tristique libero nunc, eget commodo lacus cursus eget. Nunc posuere a justo vitae efficitur. Cras suscipit lectus metus, eget malesuada risus ultrices placerat. Proin hendrerit arcu et tellus faucibus semper. Ut sapien arcu, feugiat a nisl nec, fermentum mattis nisl. Maecenas molestie elit eget metus mattis, vel auctor est cursus. Praesent egestas lorem id lectus mattis, nec fringilla libero imperdiet.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;