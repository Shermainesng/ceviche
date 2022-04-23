import React, { useEffect } from "react";

function Home() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="custom-banner d-flex align-items-center justify-content-center">
          <h1 className="banner-font">Let's Take A Dive into Sustainable Seafood</h1>
        </div>
      </div>

      <div className="row justify-content-center text-center custom-home-row">
        <div className="col-5 align-self-end pt-5">
          <div className="logo-home">
            <img src="greylogo.png" alt="logo" />
          </div>
        </div>
        <div className="col-8 pb-5">
          <p className="home-body-p">
            Passionate about the ocean and sustainability, cevichey acts as a resource bank andeducation platform to answer the question <em>"does sustainable seafood exist?"</em>
          </p>
        </div>
      </div>

      <div className="row">
        <div className="custom-banner2 d-flex justify-content-center align-items-center">
          <h1 className="banner-font text-center">It's time we dive deeper</h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
