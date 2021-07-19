import React from "react";

import HeroSection from "./hero-section/HeroSection.js";
import Services from "./services/Services.js";
import Specializations from "./specializations/Specializations.js";
import Test from "./specializations/Test.js";

export default function Home() {
  return (
    <div className="home-page">
      <HeroSection />
      <Services />
      <Test />
    </div>
  );
}