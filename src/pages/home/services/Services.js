import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RiArrowRightSLine } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";

const services = ["weight issues", "fertility", "sleep issues", "anxiety", "diabetes", "back pain", "headaches", "allergies"];

export default function Services() {
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

      <div className="home-page services__link">
        <Link to="/services">See all our services</Link>
        <RiArrowRightSLine />
      </div>
    </div>
  );
}