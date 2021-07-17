import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

import LogoWhite from "../../assets/logo-white.svg";

export default function Header() {
  const headerElement = useRef(null);
  const headerIntersectionElement = useRef(null);

  useEffect(() => {
    let observerRefValue = null;

    const observerCallback = ([entry]) => {
      if (!entry.isIntersecting)
        headerElement.current.classList.add("header--active");
      else headerElement.current.classList.remove("header--active");
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
        <div className="header__container">
          <div className="header__logo">
            <img src={LogoWhite} alt="" />
          </div>

          <div className="header__content">
            <ul className="header__list">
              <li><NavLink to="/" exact activeClassName="header__list-link--active">Home</NavLink></li>
              <li><NavLink to="/services" exact activeClassName="header__list-link--active">Services</NavLink></li>
              <li><NavLink to="/specializations" exact activeClassName="header__list-link--active">Specializations</NavLink></li>
              <li><NavLink to="/prices" exact activeClassName="header__list-link--active">Prices</NavLink></li>
            </ul>

            <div className="header__button">Discover more</div>
          </div>
        </div>
      </header>

      <div className="header-observer" ref={headerIntersectionElement}></div>
    </>
  );
}