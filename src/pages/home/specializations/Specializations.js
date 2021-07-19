import React from 'react'

import HomePageImageOne from "../../../assets/home-page-image-one.jfif";
import HomePageImageTwo from "../../../assets/home-page-image-two.jfif";

export default function Specializations() {
  return (
    <div className="home-page specializations">
      <div className="home-page specializations__content">
        <h1 className="home-page specializations__content__title">Welcome To The Hospital</h1>
        <div className="home-page specializations__content__line"></div>
        <p className="home-page specializations__content__text">Medical assistance and counseling at the best hospitals and clinics in Vienna.</p>
        <p className="home-page specializations__content__text">Support in organizing transport and accommodation to reduce expenses.</p>
        <div className="home-page specializations__content__button">Discover more</div>
      </div>

      <div className="home-page specializations__images">
        <div className="home-page specializations__images__container-one">
          <img src={HomePageImageOne} alt="" />
        </div>

        <div className="home-page specializations__images__container-two">
          <img src={HomePageImageTwo} alt="" />
        </div>
      </div>
    </div>
  );
}