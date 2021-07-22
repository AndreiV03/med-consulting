import React, { useEffect, useState } from "react";
import { RiArrowRightSLine, RiMailSendFill, RiCollageFill, RiUserFill, RiQuestionAnswerFill } from "react-icons/ri";
import { Link, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { motion, AnimatePresence } from "framer-motion";

import Layout from "../components/Layout.js";
import "../styles/pages/home.css";

import IllustrationOne from "../assets/images/svg/illustration-one.svg";
import IllustrationTwo from "../assets/images/svg/illustration-two.svg";
import IllustrationThree from "../assets/images/svg/illustration-three.svg";
import IllustrationFour from "../assets/images/svg/illustration-four.svg";

const heroSectionIcons = [RiMailSendFill, RiCollageFill, RiUserFill, RiQuestionAnswerFill];
const secondSectionIcons = [RiMailSendFill, RiCollageFill, RiUserFill, RiQuestionAnswerFill];
const illustrations = [IllustrationOne, IllustrationTwo, IllustrationThree, IllustrationFour];

const services = ["weight issues", "fertility", "sleep issues", "anxiety", "diabetes", "back pain", "headaches", "allergies"];

const cardsVariants = {
  animate: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
}

const cardVariants = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 }
}

function Card({ cards, icons, index }) {
  const Icon = icons[index];

  return (
    <motion.div className="card" variants={cardVariants}>
      <div className="card-icon">
        <Icon />
      </div>
      
      <div>
        <h4>{cards[index].textOne}</h4>
        <p>{cards[index].textTwo}</p>
      </div>
    </motion.div>
  );
}

function Item({ illustrationsText, index }) {
  const Illustration = illustrations[index];

  return (
    <div className="item">
      <Illustration />
      <p>Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus</p>
    </div>
  );
}

export default function Home({ data }) {
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

  const { heroSectionCards } = data.file.childrenDataJson[0];
  const { secondSectionCards } = data.file.childrenDataJson[0];
  const illustrationsText = {};

  return (
    <Layout>
      <div className="hero-section">
        <motion.div className="content" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ ease: "easeInOut", duration: 0.3 }}>
          <h4 className="subtitle">Certificated doctors</h4>
          <h1 className="title">Search & Find Clinic For Your Surgery</h1>

          <motion.div className="cards" initial="initial" animate="animate" variants={cardsVariants}>
            <Card cards={heroSectionCards} icons={heroSectionIcons} index={0} />
            <Card cards={heroSectionCards} icons={heroSectionIcons} index={1} />
            <Card cards={heroSectionCards} icons={heroSectionIcons} index={2} />
            <Card cards={heroSectionCards} icons={heroSectionIcons} index={3} />
          </motion.div>

          <div className="button">Discover more</div>
        </motion.div>

        <motion.div className="image-container" initial={{ y: 20, x: 20, opacity: 0 }} animate={{ y: 0, x: 0, opacity: 1 }} transition={{ ease: "easeInOut", duration: 0.4 }}>
          <StaticImage
            src="../assets/images/hero-section-image.jpeg"
            alt=""
            placeholder="blurred"
            className="image"
          />
        </motion.div>
      </div>

      <div className="second-section">
        <div className="text-box">
          <h4 className="subtitle">Fastest solutions</h4>
          <h2 className="title">4 Easy Steps And Get Your Solution</h2>
        </div>

        <div className="cards">
          <Card cards={secondSectionCards} icons={secondSectionIcons} index={0} />
          <Card cards={secondSectionCards} icons={secondSectionIcons}  index={1} />
          <Card cards={secondSectionCards} icons={secondSectionIcons}  index={2} />
          <Card cards={secondSectionCards} icons={secondSectionIcons}  index={3} />
        </div>
      </div>

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

      <div className="fourth-section">
        <div className="text-box">
          <h2 className="title">A membership designed around you</h2>
          <p className="subtitle">We work with your insurance just like a typical doctor’s office, but we offer so much more.</p>
        </div>

        <div className="items">
          <Item illustrationsText={illustrationsText} index={0} />
          <Item illustrationsText={illustrationsText} index={1} />
          <Item illustrationsText={illustrationsText} index={2} />
          <Item illustrationsText={illustrationsText} index={3} />
        </div>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query HomePageCards {
    file(relativePath: {eq: "home.json"}) {
      childrenDataJson {
        heroSectionCards {
          textOne
          textTwo
        }
        secondSectionCards {
          textOne
          textTwo
        }
      }
    }
  }
`;