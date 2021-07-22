import React from "react";

import IllustrationOne from "../../images/svg/illustration-one.svg";
import IllustrationTwo from "../../images/svg/illustration-two.svg";
import IllustrationThree from "../../images/svg/illustration-three.svg";
import IllustrationFour from "../../images/svg/illustration-four.svg";

export default function FourthSection() {
  return (
    <div className="fourth-section">
      <div className="text-box">
        <h2 className="title">A membership designed around you</h2>
        <p className="subtitle">We work with your insurance just like a typical doctor’s office, but we offer so much more.</p>
      </div>

      <div className="illustrations">
        <div className="illustration">
          <IllustrationOne />
          <p>Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus</p>
        </div>

        <div className="illustration">
          <IllustrationTwo />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin</p>
        </div>

        <div className="illustration">
          <IllustrationThree />
          <p>Pellentesque in ipsum id orci porta dapibus. Curabitur arcu erat, accumsan id</p>
        </div>

        <div className="illustration">
          <IllustrationFour />
          <p>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ante ipsum</p>
        </div>
      </div>
    </div>
  );
}