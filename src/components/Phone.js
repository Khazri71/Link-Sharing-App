import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Card from "./Card";

const Phone = () => {
  return (
    <>
      <section className="phone">
        {/* <img src="imgs/phonebg.jpg" alt="iphone" className="mx-auto" />     */}
        <Card />{" "}
      </section>
    </>
  );
};

export default Phone;
