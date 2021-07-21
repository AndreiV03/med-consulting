import React from "react";
import { RiFacebookCircleFill, RiInstagramFill, RiLinkedinBoxFill, RiMailFill } from "react-icons/ri";
import { Link } from "gatsby";

import "../styles/components/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="content">
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/specializations">Specializations</Link>
        <Link to="/">Media Center</Link>
        <Link to="/">Careers</Link>
        <Link to="/">About</Link>
        <Link to="/">Contact</Link>
        <Link to="/">Blog</Link>
        <Link to="/">Investor Relations</Link>
      </div>

      <div className="bottom-section">
        <h2>© 2021 MED Consulting. All rights reserved.</h2>

        <div className="bottom-section__social-media">
          <a aria-label="facebook" href="https://www.facebook.com/adina.alchine"><RiFacebookCircleFill /></a>
          <a aria-label="instagram" href="https://www.instagram.com/adinaalchine/"><RiInstagramFill /></a>
          <a aria-label="linkedin" href="https://www.linkedin.com/in/adina-luiza-alchine-920903a6/"><RiLinkedinBoxFill /></a>
          <a aria-label="mail" href="mailto:office@medconsulting.ro"><RiMailFill /></a>
        </div>
      </div>
    </footer>
  );
}