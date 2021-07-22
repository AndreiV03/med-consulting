import React from "react";

import "../styles/pages/home.css";
import Layout from "../components/Layout.js";
import Seo from "../components/Seo.js";

import HeroSection from "../components/home/HeroSection.js";
import SecondSection from "../components/home/SecondSection.js";
import ThirdSection from "../components/home/ThirdSection.js";
import FourthSection from "../components/home/FourthSection.js";

export default function Home() {
  return (
    <Layout>
      <Seo
        title="A healthy life"
      />

      <HeroSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
    </Layout>
  );
}