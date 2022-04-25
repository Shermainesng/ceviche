import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="container-fluid">
      <div className="row footer-row-custom justify-content-around pt-3">
        <div className="col-4 col-md-4 col-lg-3">
          <div className="useful-links">
            <p>
              <strong>Useful Links</strong>
              <br />
              Sustainable Seafood Guide
              <br />
              About
              <br />
              FAQ
              <br />
            </p>
          </div>
        </div>
        <div className="col-4 icons-list pt-3 pe-4">
          <FontAwesomeIcon className="envelope pe-1" icon={faEnvelope} />
          <FontAwesomeIcon className="instalogo" icon={faInstagram} />
          <br />
          <p className="small-text">&copy; ceviche.com</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
