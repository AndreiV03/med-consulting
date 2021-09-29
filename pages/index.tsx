import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

import styles from "../styles/pages/home.module.scss";
import { slideshowVariants } from "../data/variants";

const services: string[] = ["weight issues", "fertility", "sleep issues", "anxiety", "diabetes", "back pain", "headaches", "allergies"];

const Home: NextPage = () => {
  const [currentService, setCurrentService] = useState<string>(services[0]);

  useEffect(() => {
    const handleSlideshow = (): void => {
      setTimeout(() => {
        const serviceIndex: number = services.indexOf(currentService);
  
        if (serviceIndex === services.length - 1) setCurrentService(services[0]);
        else setCurrentService(services[serviceIndex + 1]);
      }, 1500);
    }

    handleSlideshow();
  }, [currentService]);

  return (
    <>
      <div className={styles.hero_section}>
        <div className={styles.column}>
          <h1 className={styles.title}>Asistenta pentru obținerea tratamentelor personalizate în clinicile din Viena</h1>
          <p>Same/next-day primary care designed around you and your life. Most insurance accepted.</p>

          <div className={styles.buttons}>
            <div className={styles.button_fill}>Sign up today</div>
            <div className={styles.button_outline}>Gift a membership</div>
          </div>

          <Link href="/" passHref>
            <a className={styles.link}>
              <span>Sponsored membership? Click here</span>
              <IoIosArrowForward />
            </a>
          </Link>
        </div>

        <div className={styles.column}>
          <div className={styles.box}>
            <div className={styles.container}>
              <Image src="/images/image-one.jfif" alt="" layout="fill" className={styles.image} />
            </div>
          </div>

          <div className={styles.box}>
            <div className={styles.container}>
              <Image src="/images/image-two.jfif" alt="" layout="fill" className={styles.image} />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.slideshow}>
        <h2 className={styles.title}>Get care today for</h2>

        <div className={styles.container}>
          {services.map(service => (
            <AnimatePresence key={service}>
              {service === currentService && (
                <motion.h2 initial="initial" animate="animate" exit="exit" variants={slideshowVariants}>{service}</motion.h2>
              )}
            </AnimatePresence>
          ))}
        </div>

        <Link href="/services" passHref>
          <a className={styles.link}>
            <span>See all our services</span>
            <IoIosArrowForward />
          </a>
        </Link>
      </div>

      <div className={styles.items}>
        <h3 className={styles.subtitle}>A membership designed around you</h3>
        <p>
          <span>We work with your insurance just like a typical doctor’s office, but we offer so much more.</span>

          <Link href="/prices" passHref>
            <a className={styles.link}>
              <span>Check your coverage</span>
              <IoIosArrowForward />
            </a>
          </Link>
        </p>

        <div className={styles.grid}>
          <div className={styles.item}>
            <div className={styles.wrapper}><Image src="/images/items/image-one.png" alt="" layout="fill" /></div>
            <p>Same/next-day appointments, in-person or over video, that start on time</p>
          </div>

          <div className={styles.item}>
            <div className={styles.wrapper}><Image src="/images/items/image-one.png" alt="" layout="fill" /></div>
            <p>Same/next-day appointments, in-person or over video, that start on time</p>
          </div>

          <div className={styles.item}>
            <div className={styles.wrapper}><Image src="/images/items/image-one.png" alt="" layout="fill" /></div>
            <p>Same/next-day appointments, in-person or over video, that start on time</p>
          </div>

          <div className={styles.item}>
            <div className={styles.wrapper}><Image src="/images/items/image-one.png" alt="" layout="fill" /></div>
            <p>Same/next-day appointments, in-person or over video, that start on time</p>
          </div>

          <div className={styles.item}>
            <div className={styles.wrapper}><Image src="/images/items/image-one.png" alt="" layout="fill" /></div>
            <p>Same/next-day appointments, in-person or over video, that start on time</p>
          </div>

          <div className={styles.item}>
            <div className={styles.wrapper}><Image src="/images/items/image-one.png" alt="" layout="fill" /></div>
            <p>Same/next-day appointments, in-person or over video, that start on time</p>
          </div>
        </div>

        <h4 className={styles.caption}>Membership costs only $199/year. Learn more about membership</h4>
        <div className={styles.button_fill}>Join today</div>
      </div>
    </>
  );
}

export default Home;