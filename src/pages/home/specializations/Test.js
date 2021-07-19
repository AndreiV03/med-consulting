import React from "react";
import { RiMailSendFill, RiCollageFill, RiUserFill } from "react-icons/ri";

export default function Test() {
  return (
    <div className="home-page specializations">
      <div className="home-page specializations__items">
        <div className="home-page specializations__item">
          <RiMailSendFill />
          <h2>Home visit</h2>
          <p>Proin eget tortor risus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.</p>
        </div>

        <div className="home-page specializations__item">
          <RiCollageFill />
          <h2>Home visit</h2>
          <p>Proin eget tortor risus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.</p>
        </div>

        <div className="home-page specializations__item">
          <RiUserFill />
          <h2>Home visit</h2>
          <p>Proin eget tortor risus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.</p>
        </div>
      </div>

      <div className="home-page specializations__section">
        <div className="home-page specializations__section__box">
          <h2>Lorem ipsum dolor sit amet, consectetur nulla</h2>
          <p>Proin eget tortor risus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Proin eget tortor risus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.</p>
        </div>

        <div className="home-page specializations__section__content">
          <h1>You can't predict the future, but you can plan for it.</h1>
          <p>Proin eget tortor risus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Proin eget tortor risus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.</p>
        </div>
      </div>
    </div>
  );
}