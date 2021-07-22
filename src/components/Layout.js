import React, { useRef } from "react";
import { motion } from "framer-motion";

import Header from "./Header.js";
import Footer from "./Footer.js";
import "../styles/index.css";

export default function Layout({ children }) {
  const observerElement = useRef(null);
  
  return (
    <>
      <Header observerElement={observerElement} />
      <div className="header-observer" ref={observerElement}></div>
      <motion.main className="page" initial="initial" animate="animate">{children}</motion.main>
      <Footer />
    </>
  );
}