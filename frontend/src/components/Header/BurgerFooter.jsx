import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const BurgerFooter = () => {
  return (
    <div className="icons">
      <FontAwesomeIcon icon={faFacebook} className="socials" />
      <FontAwesomeIcon icon={faLinkedinIn} className="socials" />
      <FontAwesomeIcon icon={faTwitter} className="socials" />
      <FontAwesomeIcon icon={faInstagram} className="socials" />
    </div>
  )
}

export default BurgerFooter