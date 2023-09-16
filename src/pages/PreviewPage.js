import React from "react";
import NavbarPrev from "../components/NavbarPrev";
import Card from "../components/Card";

const PreviewPage = () => {
  return (
    <>
      <NavbarPrev />

      <div className="bg-profile"></div>
      <section className="previewPage container row mx-auto">
        <div class="col-sm-12 col-md-4 mx-auto  ">
          <Card />
        </div>
      </section>
    </>
  );
};

export default PreviewPage;
