import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Menu({ isMenuOpened }) {
  return (
    <motion.div className="menu"
      
    >
      <div className="menu__links">
        <Link to="/">Home</Link>
        <Link to="/specializations">Specializations</Link>
        <Link to="/services">Services</Link>
        <Link to="/prices">Prices</Link>
      </div>
    </motion.div>
  );
}