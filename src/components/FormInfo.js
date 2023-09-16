import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faBars, faLink } from "@fortawesome/free-solid-svg-icons";
const FormInfo = () => {
  return (
    <section className="form">
      <h2>Profile Details</h2>
      <p className="pb-3">Lorem ipsum dolor sit amet consectetur.</p>
      <div className="part">
        <p>Profile picture</p>
        <div className="image">
          <img src="imgs/face.avif" alt="face" />
        </div>
      </div>
      <div className="part">
        <form action="">
          <div className="input">
            <label htmlFor="firstname">First name *</label>
            <input type="text" id="firstname" />
          </div>
          <div className="input">
            <label htmlFor="lastname">Last name *</label>
            <input type="text" id="lastname" />
          </div>
          <div className="input">
            <label htmlFor="email">Email</label>
            <input type="email" />
          </div>
        </form>
      </div>
      <hr />
      <button className="btn save">Save</button>
    </section>
  );
};

export default FormInfo;
