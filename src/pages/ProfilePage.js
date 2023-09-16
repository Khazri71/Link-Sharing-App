import React from "react";
import Phone from "../components/Phone";
import FormInfo from "../components/FormInfo";
import Navbar from "../components/Navbar";
const ProfilePage = () => {
  return (
    <>
      <Navbar />
      <section className="profilePage container row mx-auto">
        <div class="col-sm-12 col-md-4 ">
          <Phone />
        </div>
        <div class=" col-sm-12 col-md-8">
          <FormInfo />
        </div>
      </section>
    </>
  );
};

export default ProfilePage;
