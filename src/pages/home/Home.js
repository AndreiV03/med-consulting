import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RiArrowRightSLine } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";

import Item from "./item/Item.js";
import HeroSectionImage from "../../assets/hero-section-image.jpeg";

const services = ["weight issues", "fertility", "sleep issues", "anxiety", "diabetes", "back pain", "headaches", "allergies"];

export default function Home() {
  const [currentService, setCurrentService] = useState(services[0]);

  useEffect(() => {
    const handleSlideshow = () => {
      setTimeout(() => {
        const serviceIndex = services.indexOf(currentService);
  
        if (serviceIndex === services.length - 1) setCurrentService(services[0]);
        else setCurrentService(services[serviceIndex + 1]);
      }, 2500);
    }

    handleSlideshow();
  }, [currentService]);

  return (
    <div className="home-page">
      <div className="home-page hero-section">
        <div className="hero-section main-content">
          <h3 className="hero-section main-content__subtitle">Certificated doctors</h3>
          <h1 className="hero-section main-content__title">Search & Find Clinic For Your Surgery</h1>

          <div className="hero-section main-content__items">
            <Item
              icon="RiMailSendFill"
              title="Get free consultation"
              text="Lorem ipsum dolor sit"
            />

            <Item
              icon="RiCollageFill"
              title="Free partnership"
              text="Lorem ipsum dolor sit"
            />
          </div>

          <div className="hero-section main-content__items">
            <Item
              icon="RiUserFill"
              title="Find the best doctors"
              text="Lorem ipsum dolor sit"
            />

            <Item
              icon="RiQuestionAnswerFill"
              title="Ask your questions"
              text="Lorem ipsum dolor sit"
            />
          </div>

          <div className="hero-section main-content__button">Discover more</div>
        </div>

        <div className="hero-section image-container">
          <div className="hero-section image-container__image">
            <img src={HeroSectionImage} alt="" />
          </div>
        </div>
      </div>

      <div className="home-page services">
        <h1 className="home-page services__title">Get care today for</h1>

        <div className="home-page services__slideshow">
          {
            services.map(service => (
              <AnimatePresence key={service}>
                {
                  service === currentService && (
                    <motion.h2
                      initial={{ y: "-150%", opacity: 0 }}
                      animate={{ y: "0", opacity: 1 }}
                      exit={{ y: "150%", opacity: 0 }}
                      transition={{ duration: 1, stiffness: 0 }}
                    >
                      {service}
                    </motion.h2>
                  )
                }
              </AnimatePresence>
            ))
          }
        </div>

        <div className="home-page services-link">
          <Link to="/services">See all our services</Link>
          <RiArrowRightSLine />
        </div>
      </div>
    </div>
  );
}