import React from "react";
import { RiMailSendFill, RiCollageFill, RiUserFill, RiQuestionAnswerFill } from "react-icons/ri";

export default function Item({ icon, title, text }) {
  return (
    <div className="hero-section main-content__item">
      <div className="hero-section main-content__item-icon">
        {
          icon === "RiMailSendFill" ? <RiMailSendFill />
            : icon === "RiCollageFill" ? <RiCollageFill />
            : icon === "RiUserFill" ? <RiUserFill />
            : <RiQuestionAnswerFill />
        }
      </div>

      <div>
        <h2>{title}</h2>
        <h3>{text}</h3>
      </div>
    </div>
  );
}