import React from "react";

import aboutImg from "../../../static/assets/images/about/About_Image.png";
// Task: image that takes up 50% of the width, 100% of the height, center content on the right side
export default function() {
  return (
    <div className="about-page-wrapper">
      <div
        className="left-column"
        style={{
          backgroundImage: `url(${aboutImg})`
        }}
      />

      <div className="right-column">
        <h1>Hi, I am Coleman Shropshire, an aspiring developer.</h1>
        <p></p>
      </div>
    </div>
  );
}
