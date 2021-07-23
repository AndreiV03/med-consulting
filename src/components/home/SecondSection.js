import React, { useEffect } from "react";
import { RiMailSendFill, RiCollageFill, RiUserFill, RiQuestionAnswerFill } from "react-icons/ri";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

const textBoxVariants = {
  initial: { y: 20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: 0.3,
      delay: 0.2
    }
  }
}

const cardsListVariants = {
  animate: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.15
    }
  }
}

const cardItemVariants = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 }
}

export default function SecondSection() {
  const textBoxControls = useAnimation();
  const [textBoxRef, textBoxInView] = useInView({ threshold: 0.2 });

  const cardsControls = useAnimation();
  const [cardsRef, cardsInView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (textBoxInView) textBoxControls.start("animate");
    if (cardsInView) cardsControls.start("animate");
  }, [textBoxControls, textBoxInView, cardsControls, cardsInView]);

  return (
    <div className="second-section">
      <motion.div className="text-box" ref={textBoxRef} initial="initial" animate={textBoxControls} variants={textBoxVariants}>
        <h4 className="subtitle">Fastest solutions</h4>
        <h2 className="title">4 Easy Steps And Get Your Solution</h2>
      </motion.div>

      <motion.div className="cards" ref={cardsRef} initial="initial" animate={cardsControls} variants={cardsListVariants}>
        <motion.div className="card" variants={cardItemVariants}>
          <div className="card-icon"><RiMailSendFill /></div>
          
          <div>
            <h4>Vivamus magna justo</h4>
            <p>Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Lorem ipsum dolor sit amet</p>
          </div>
        </motion.div>

        <motion.div className="card" variants={cardItemVariants}>
          <div className="card-icon"><RiCollageFill /></div>
          
          <div>
            <h4>Curabitur aliquet quam</h4>
            <p>Curabitur aliquet quam id dui posuere blandit. Vivamus suscipit tortor eget felis porttitor volutpat</p>
          </div>
        </motion.div>

        <motion.div className="card" variants={cardItemVariants}>
          <div className="card-icon"><RiUserFill /></div>
          
          <div>
            <h4>Proin eget tortor risus</h4>
            <p>Proin eget tortor risus. Vivamus suscipit tortor eget felis porttitor volutpat. Vivamus suscipit</p>
          </div>
        </motion.div>

        <motion.div className="card" variants={cardItemVariants}>
          <div className="card-icon"><RiQuestionAnswerFill /></div>
          
          <div>
            <h4>Vestibulum ante ipsum</h4>
            <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}