import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const CardLink = () => {
  return (
    <section className="card">
      {/* <img src="imgs/phonebg.jpg" alt="iphone" className="mx-auto" /> */}
      <div className="info">
        <div className="circle c-2 border-0 "></div>
        <div className="name n-2 "></div>
        <div className="email e-2 "></div>
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

export default CardLink;
