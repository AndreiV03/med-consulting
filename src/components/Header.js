import React, { useEffect, useRef } from "react";
import { Link } from "gatsby";
import { motion } from "framer-motion";

import "../styles/components/header.css";
import Logo from "../images/svg/logo.svg";

const headerVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: 0.3
    }
  }
}

export default function Header({ observerElement }) {
  const headerElement = useRef(null);

  useEffect(() => {
    let observerRefValue = null;

    const observerCallback = ([entry]) => {
      if (!entry.isIntersecting)
        headerElement.current.classList.add("header-shadow");
      else headerElement.current.classList.remove("header-shadow");
    }

    const observer = new IntersectionObserver(observerCallback);
  
    if (observerElement.current) {
      observer.observe(observerElement.current);
      observerRefValue = observerElement.current;
    }

    return () => {
      if (observerRefValue)
        observer.unobserve(observerRefValue);
    }
  }, [headerElement, observerElement]);

  return (
    <motion.header className="header" ref={headerElement} initial="initial" animate="animate" variants={headerVariants}>
      <div className="container">
        <Logo />

        <div className="container-content">
          <div className="container-list">
            <Link to="/" activeClassName="link--active">Home</Link>
            <Link to="/services" activeClassName="link--active">Services</Link>
            <Link to="/specializations" activeClassName="link--active">Specializations</Link>
            <Link to="/prices" activeClassName="link--active">Prices</Link>
          </div>

          <div className="container-button">Discover more</div>
        </div>
      </div>
    </motion.header>
  );
}