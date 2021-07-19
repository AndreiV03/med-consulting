import React from "react";
import { Link } from "react-router-dom";
import { RiFacebookCircleFill, RiInstagramFill, RiLinkedinBoxFill, RiMailFill } from "react-icons/ri";

export default function Footer() {
  return (
    <div className="footer component">
      <div className="footer footer__content">
        <div className="footer__content columns">
          <div className="footer__content column">
            <h2 className="footer__content column__title">MED Consulting</h2>

            <ul className="footer__content column__list">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/specializations">Specializations</Link></li>
              <li><Link to="/prices">Prices</Link></li>
            </ul>
          </div>

          <div className="footer__content column">
            <h2 className="footer__content column__title">Contact Informations</h2>

            <ul className="footer__content column__items">
              <li>Kaasgrabengasse 16/5, 1190 Wien</li>
              <li>adina.alchine@hotmail.com</li>
            </ul>
          </div>
        </div>

        <div className="footer__content newsletter">
          <h2>Join the newsletter and read the new posts first</h2>
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>

          <div className="footer__content newsletter__input-container">
            <input type="email" placeholder="example@example.com" />
            <div className="footer__content newsletter__input-button">Subscribe</div>
          </div>
        </div>
      </div>

      <div className="footer footer__bottom-section">
        <h2>© 2021 MED Consulting. All rights reserved.</h2>

        <div className="footer__bottom-section social-media">
          <a href="https://www.facebook.com/adina.alchine"><RiFacebookCircleFill /></a>
          <a href="https://www.instagram.com/adinaalchine/"><RiInstagramFill /></a>
          <a href="https://www.linkedin.com/in/adina-luiza-alchine-920903a6/"><RiLinkedinBoxFill /></a>
          <a href="mailto:office@medconsulting.ro"><RiMailFill /></a>
        </div>
      </div>
    </div>
  );
}