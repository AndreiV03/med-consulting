import React from "react";
import { RiMailSendFill, RiCollageFill, RiUserFill, RiQuestionAnswerFill } from "react-icons/ri";

export default function SecondSection() {
  return (
    <div className="second-section">
      <div className="text-box">
        <h4 className="subtitle">Fastest solutions</h4>
        <h2 className="title">4 Easy Steps And Get Your Solution</h2>
      </div>

      <div className="cards">
        <div className="card">
          <div className="card-icon"><RiMailSendFill /></div>
          
          <div>
            <h4>Get free consultation</h4>
            <p>Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Lorem ipsum dolor sit amet</p>
          </div>
        </div>

        <div className="card">
          <div className="card-icon"><RiCollageFill /></div>
          
          <div>
            <h4>Get free consultation</h4>
            <p>Curabitur aliquet quam id dui posuere blandit. Vivamus suscipit tortor eget felis porttitor volutpat</p>
          </div>
        </div>

        <div className="card">
          <div className="card-icon"><RiUserFill /></div>
          
          <div>
            <h4>Get free consultation</h4>
            <p>Proin eget tortor risus. Vivamus suscipit tortor eget felis porttitor volutpat. Vivamus suscipit</p>
          </div>
        </div>

        <div className="card">
          <div className="card-icon"><RiQuestionAnswerFill /></div>
          
          <div>
            <h4>Get free consultation</h4>
            <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit</p>
          </div>
        </div>
      </div>
    </div>
  );
}