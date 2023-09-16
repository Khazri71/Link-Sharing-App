import React from "react";
import Phone from "../components/Phone";
import Form from "../components/Form";
import Navbar from "../components/Navbar";

import CardLink from "../components/CardLink";

const LinksPage = () => {
  return (
    <>
      <Navbar />

      <section className="linksPage container row mx-auto">
        <div class="col-sm-12 col-md-4 ">
          <section className="phone">
            {/* <img src="imgs/phonebg.jpg" alt="iphone" className="mx-auto" />     */}
            <CardLink className="bg-primary" />{" "}
          </section>
        </div>
        <div class=" col-sm-12 col-md-8">
          <Form />
        </div>
      </section>
    </>
  );
};

export default LinksPage;
