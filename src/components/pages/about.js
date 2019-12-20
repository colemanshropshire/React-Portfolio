import React from "react";
import aboutImg from "../../../static/assets/images/bio/About_Image.png";

export default function() {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          backgroundImage: `url(${aboutImg})`
        }}
      />

      <div className="right-column">
        <h1>
          Hi, I'm Coleman Shropshire. I am a 16 year old studying developer in
          Provo Utah.
        </h1>
        <p id="bio">
          I have been interested in software development and programming since
          elementary school, my friend told me about the things you could do if
          you could program. Since then, I have been looking around, trying to
          learn as much as I can. Even though I don't know everything yet, I am
          confident I can learn. Currently I h html, css, javascript, react, and
          I am learning python. I have gained job experience in fast food, but
          now I am looking for real career experience in developing.
        </p>
        <a href="https://my.indeed.com/p/colemans-x5pr70b" target="_blank">
          You can view my indeed resume here.{" "}
        </a>
      </div>
    </div>
  );
}
