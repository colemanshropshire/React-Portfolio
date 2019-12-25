import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import mailImg from "../../../static/assets/images/contact/mail_box.jpg";

export default function() {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          backgroundImage: `url(${mailImg})`
        }}
      />
      <div className="right-column">
        <h1>Contact info</h1>
        <div className="contact-info">
          <div className="contact-item">
            <FontAwesomeIcon icon="phone-alt" />
            <p>(864)381-3807</p>
          </div>
          <div className="contact-item">
            <FontAwesomeIcon icon="envelope-open-text" />
            <p>coleshrop@gmail.com</p>
          </div>
          <div className="contact-item">
            <FontAwesomeIcon icon="map-marked-alt" />
            <p>Provo, UT</p>
          </div>
        </div>
      </div>
    </div>
  );
}
