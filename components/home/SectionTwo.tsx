import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";

import styles from "../../styles/pages/Home.module.scss";

const services: string[] = ["weight issues", "fertility", "sleep issues", "anxiety", "diabetes", "back pain", "headaches", "allergies"];

const slideshowVariants = {
  initial: {
    y: "-150%",
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      stiffness: 0
    }
  },
  exit: {
    y: "150%",
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      stiffness: 0
    }
  }
};

const SectionTwo = (): JSX.Element => {
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
    <div className={styles.section_two}>
      <div className={styles.row}>
        <h2 className={styles.title}>Get care today for</h2>

        <div className={styles.slideshow}>
          {services.map(service => (
            <AnimatePresence key={service}>
              {service === currentService && (
                <motion.h3 initial="initial" animate="animate" exit="exit" variants={slideshowVariants}>{service}</motion.h3>
              )}
            </AnimatePresence>
          ))}
        </div>

        <Link href="/services" passHref>
          <a className={styles.link}>
            <span>See all our services</span>
            <RiArrowRightSLine />
          </a>
        </Link>
      </div>

      <div className={styles.row}>
        <div className={styles.subtitle}>A membership designed around you</div>
        <p className={styles.paragraph}>We work with your insurance just like a typical doctor’s office, but we offer so much more.</p>

        <Link href="/prices" passHref>
          <a className={styles.link}>
            <span>Check your coverage</span>
            <RiArrowRightSLine />
          </a>
        </Link>

        <div className={styles.items}>
          <div className={styles.item}>
            <div className={styles.container}>
              <Image src="/svg/item-one.svg" alt="" layout="fill" className={styles.image} />
            </div>

            <p className={styles.paragraph}>Same/next-day appointments, in-person or over video, that start on time</p>
          </div>

          <div className={styles.item}>
            <div className={styles.container}>
              <Image src="/svg/item-one.svg" alt="" layout="fill" className={styles.image} />
            </div>

            <p className={styles.paragraph}>Same/next-day appointments, in-person or over video, that start on time</p>
          </div>

          <div className={styles.item}>
            <div className={styles.container}>
              <Image src="/svg/item-one.svg" alt="" layout="fill" className={styles.image} />
            </div>

            <p className={styles.paragraph}>Same/next-day appointments, in-person or over video, that start on time</p>
          </div>

          <div className={styles.item}>
            <div className={styles.container}>
              <Image src="/svg/item-one.svg" alt="" layout="fill" className={styles.image} />
            </div>

            <p className={styles.paragraph}>Same/next-day appointments, in-person or over video, that start on time</p>
          </div>

          <div className={styles.item}>
            <div className={styles.container}>
              <Image src="/svg/item-one.svg" alt="" layout="fill" className={styles.image} />
            </div>

            <p className={styles.paragraph}>Same/next-day appointments, in-person or over video, that start on time</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionTwo;