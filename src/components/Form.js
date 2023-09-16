import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faBars, faLink } from "@fortawesome/free-solid-svg-icons";
const Form = () => {
  return (
    <section className="form">
      <h2>Customize Your Links</h2>
      <p className="pb-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit Id iure sed .
      </p>

      <div className="add-link mb-4">
        {" "}
        <p className="my-auto">+ Add new Link</p>
      </div>
      <div className="link-box mb-2  ">
        <div className="link-title mb-2">
          <span>
            {" "}
            <FontAwesomeIcon icon={faBars} /> {"  "}Link #1
          </span>
          <span>Remove</span>
        </div>
        <div className="link-info">
          <p>Plateform</p>
          <div class="input-group mb-3">
            <label class="input-group-text bg-white" for="inputGroupSelect01">
              <FontAwesomeIcon icon={faGithub} />
              {/* <FontAwesomeIcon icon={faYoutube} />
              <FontAwesomeIcon icon={faLinkedin} /> */}
            </label>
            <select class="form-select" id="inputGroupSelect01">
              <option selected>Choose ...</option>
              <option value="1" selected>
                Github
              </option>
              <option value="2">Youtube</option>
              <option value="3">Linkedin</option>
            </select>
          </div>

          <p>Links</p>
          <div class="input-group">
            <label class="input-group-text bg-white ">
              <FontAwesomeIcon icon={faLink} />
            </label>
            <input type="url" className="form-control pb-2" placeholder="Url" />
          </div>
        </div>
      </div>
      <hr />
      <button className="btn save">Save</button>
    </section>
  );
};

export default Form;
