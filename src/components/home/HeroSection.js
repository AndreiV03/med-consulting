import React from "react";
import { RiMailSendFill, RiUserFill, RiHomeHeartFill, RiQuestionAnswerFill } from "react-icons/ri";
import { StaticImage } from "gatsby-plugin-image";
import { motion } from "framer-motion";

const contentVariants = {
  initial: { y: 20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: 0.3
    }
  }
}

const cardsListVariants = {
  animate: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
}

const cardItemVariants = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 }
}

const imageContainerVariants = {
  initial: { x: 20, y: 20, opacity: 0 },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: 0.3
    }
  }
}

export default function HeroSection() {
  return (
    <div className="hero-section">
      <motion.div className="content" variants={contentVariants}>
        <h4 className="subtitle">Certificated doctors</h4>
        <h1 className="title">Search & Find Clinic For Your Surgery</h1>

        <motion.div className="cards" variants={cardsListVariants}>
          <motion.div className="card" variants={cardItemVariants}>
            <div className="card-icon"><RiMailSendFill /></div>
            
            <div>
              <h4>Get free consultation</h4>
              <p>Lorem ipsum dolor sit</p>
            </div>
          </motion.div>

          <motion.div className="card" variants={cardItemVariants}>
            <div className="card-icon"><RiUserFill /></div>
            
            <div>
              <h4>Free partnership</h4>
              <p>Proin eget tortor risus</p>
            </div>
          </motion.div>

          <motion.div className="card" variants={cardItemVariants}>
            <div className="card-icon"><RiHomeHeartFill /></div>
            
            <div>
              <h4>Find the best doctors</h4>
              <p>Sed porttitor lectus nibh</p>
            </div>
          </motion.div>

          <motion.div className="card" variants={cardItemVariants}>
            <div className="card-icon"><RiQuestionAnswerFill /></div>
            
            <div>
              <h4>Ask your questions</h4>
              <p>Praesent sapien massa</p>
            </div>
          </motion.div>
        </motion.div>

        <div className="button">Discover more</div>
      </motion.div>

      <motion.div className="image-container" variants={imageContainerVariants}>
        <StaticImage
          src="../../images/hero-section-image.jpeg"
          alt="doctor"
          placeholder="blurred"
          className="image"
        />
      </motion.div>
    </div>
  );
}