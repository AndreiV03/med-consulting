import React from "react";
import { RiMailSendFill, RiCollageFill, RiUserFill, RiQuestionAnswerFill } from "react-icons/ri";

import HeroSectionImage from "../../../assets/hero-section-image.jpeg";

export default function HeroSection() {
  return (
    <div className="home-page hero-section">
      <div className="home-page hero-section__content">
        <h3 className="home-page hero-section__content__subtitle">Certificated doctors</h3>
        <h1 className="home-page hero-section__content__title">Search & Find Clinic For Your Surgery</h1>

        <div className="home-page hero-section__content__items">
          <div className="home-page hero-section__content__item">
            <div className="home-page hero-section__content__item-icon"><RiMailSendFill /></div>

            <div>
              <h2>Get free consultation</h2>
              <h3>Lorem ipsum dolor sit</h3>
            </div>
          </div>

          <div className="home-page hero-section__content__item">
            <div className="home-page hero-section__content__item-icon"><RiCollageFill /></div>

            <div>
              <h2>Free partnership</h2>
              <h3>Lorem ipsum dolor sit</h3>
            </div>
          </div>
        </div>

        <div className="home-page hero-section__content__items">
          <div className="home-page hero-section__content__item">
            <div className="home-page hero-section__content__item-icon"><RiUserFill /></div>

            <div>
              <h2>Find the best doctors</h2>
              <h3>Lorem ipsum dolor sit</h3>
            </div>
          </div>

          <div className="home-page hero-section__content__item">
            <div className="home-page hero-section__content__item-icon"><RiQuestionAnswerFill /></div>

            <div>
              <h2>Ask your questions</h2>
              <h3>Lorem ipsum dolor sit</h3>
            </div>
          </div>
        </div>

        <div className="home-page hero-section__content__button">Discover more</div>
      </div>

      <div className="home-page hero-section__image">
        <div className="home-page hero-section__image-container">
          <img src={HeroSectionImage} alt="" />
        </div>
      </div>
    </div>
  );
}