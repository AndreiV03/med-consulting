import React from "react";

import Header from "./Header.js";
import Footer from "./Footer.js";
import "../styles/index.css";

export default function Layout({ children }) {
  return (
    <>
      <Header />

      <div className="page">
        {children}
      </div>

      <Footer />
    </>
  );
}