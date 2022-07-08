import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";


import "../../styles/footer/footer.css";


function linkFace(){
  Location.href = "https://www.facebook.com"
}



const Footer = () => {
  return (
    <>
      <footer>
        <div id="footer-text">
          <p>©2021 Digital Booking</p>
        </div>
        <div id="icons">
        
          <FontAwesomeIcon icon={faFacebook} className="socials" onClick={linkFace}/>
        
          <FontAwesomeIcon icon={faLinkedinIn} className="socials" />
          <FontAwesomeIcon icon={faTwitter} className="socials" />
          <FontAwesomeIcon icon={faInstagram} className="socials" />
        </div>
      </footer>
    </>
  );
};

export default Footer;
