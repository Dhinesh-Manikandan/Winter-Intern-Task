import React from "react";
import "./LogosMarquee.css";

import facebook from "../../Images/facebook.webp";
import github from "../../Images/github.webp";
import instagram from "../../Images/Instagram.webp";
import linkedin from "../../Images/linkedin.webp";
import spotify from "../../Images/spotify.webp";
import xlogo from "../../Images/X.webp";

const logos = [facebook, github, instagram, linkedin, spotify, xlogo];

export default function LogosMarquee() {
  return (
    <div className="logos-marquee">
      {/* Row 1 -> left to right */}
      <div className="logos-row row-right">
        {[...logos, ...logos].map((logo, i) => (
          <div className="logo-box" key={`r1-${i}`}>
            <img src={logo} alt="" className="logo-img" />
          </div>
        ))}
      </div>

      {/* Row 2 -> right to left */}
      <div className="logos-row row-left">
        {[...logos, ...logos].map((logo, i) => (
          <div className="logo-box" key={`r2-${i}`}>
            <img src={logo} alt="" className="logo-img" />
          </div>
        ))}
      </div>

      {/* Row 3 -> left to right */}
      <div className="logos-row row-right">
        {[...logos, ...logos].map((logo, i) => (
          <div className="logo-box" key={`r3-${i}`}>
            <img src={logo} alt="" className="logo-img" />
          </div>
        ))}
      </div>

      {/* optional fade overlays to soften edges */}
      <div className="logos-fade left"></div>
      <div className="logos-fade right"></div>
    </div>
  );
}
