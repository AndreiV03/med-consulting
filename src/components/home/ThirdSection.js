import React, { useEffect, useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import { Link } from "gatsby";
import { motion, AnimatePresence } from "framer-motion";

const services = ["weight issues", "fertility", "sleep issues", "anxiety", "diabetes", "back pain", "headaches", "allergies"];

export default function ThirdSection() {
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
    <div className="third-section">
      <h2 className="title">Get care today for</h2>

      <div className="slideshow">
        {
          services.map(service => (
            <AnimatePresence key={service}>
              {
                service === currentService && (
                  <motion.h3
                    initial={{ y: "-150%", opacity: 0 }}
                    animate={{ y: "0", opacity: 1 }}
                    exit={{ y: "150%", opacity: 0 }}
                    transition={{ duration: 1, stiffness: 0 }}
                  >
                    {service}
                  </motion.h3>
                )
              }
            </AnimatePresence>
          ))
        }
      </div>

      <div className="link">
        <Link to="/services">See all our services</Link>
        <RiArrowRightSLine />
      </div>
    </div>
  );
}