import React from "react";
import { BrowserRouter } from "react-router-dom";

import Header from "./components/header/Header.js";
import Footer from "./components/footer/Footer.js";
import Pages from "./pages/Pages.js";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Pages />
      <Footer />
    </BrowserRouter>
  );
}