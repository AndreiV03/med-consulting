import React, { useEffect, useRef } from "react";
import { Link } from "gatsby";

import Logo from "../assets/images/svg/logo.svg";
import "../styles/components/header.css";

export default function Header() {
  const headerElement = useRef(null);
  const headerIntersectionElement = useRef(null);

  useEffect(() => {
    let observerRefValue = null;

    const observerCallback = ([entry]) => {
      if (!entry.isIntersecting)
        headerElement.current.classList.add("header-shadow");
      else headerElement.current.classList.remove("header-shadow");
    }

    const observerOptions = {
      rootMargin: "-80px"
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions);
  
    if (headerIntersectionElement.current) {
      observer.observe(headerIntersectionElement.current);
      observerRefValue = headerIntersectionElement.current;
    }

    return () => {
      if (observerRefValue)
        observer.unobserve(observerRefValue);
    }
  }, [headerElement, headerIntersectionElement]);

  return (
    <>
      <header className="header" ref={headerElement}>
        <div className="container">
          <div className="container-logo">
            <Logo height={48} />
          </div>

          <div className="container-content">
            <div className="container-list">
              <Link to="/" activeClassName="link--active">Home</Link>
              <Link to="/services" activeClassName="link--active">Services</Link>
              <Link to="/specializations" activeClassName="link--active">Specializations</Link>
              <Link to="/prices" activeClassName="link--active">Prices</Link>
            </div>

            <div className="container-button">Discover more</div>
          </div>
        </div>
      </header>

      <div className="header-observer" ref={headerIntersectionElement}></div>
    </>
  );
}