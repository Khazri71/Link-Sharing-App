import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Card = () => {
  return (
    <section className="card">
      {/* <img src="imgs/phonebg.jpg" alt="iphone" className="mx-auto" /> */}
      <div className="info">
        <div className="circle">
          <img src="imgs/face.avif" alt="face" />
        </div>
        <div className="name">Ben Wright</div>
        <div className="email">ben@exemple.com</div>
      </div>

      <div className="items-box">
        <div className="item-box github">
          <FontAwesomeIcon icon={faGithub} />
          Github
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
        <div className="item-box youtube">
          <FontAwesomeIcon icon={faYoutube} />
          Youtube
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
        <div className="item-box linkedin">
          <FontAwesomeIcon icon={faLinkedin} />
          LinkedIn
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </div>
    </section>
  );
};

export default Card;
