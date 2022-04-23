import React, { useEffect } from "react";

function Info() {
  return (
    <div className="container">
      <div className="row py-5">
        <div className="col-6 col-md-4 col-lg-3">
          <div className="custom-info-img info-1-img"></div>
        </div>
        <div className="col-8 col-md-8 col-lg-6">
          <div className="info-text">
            <h2>What is sustainable seafood?</h2>
            <p>Sustainable seafood ensures that fisheries have time to replenish and causes ensures minimal damage to ecosystems,while supporting the livelihoods of coastal communities.</p>
          </div>
        </div>
      </div>

      <div className="row py-5">
        <div className="col-6 col-md-4 col-lg-3">
          <div className="custom-info-img info-2-img"></div>
        </div>
        <div className="col-8 col-md-8 col-lg-6">
          <div className="info-text">
            <h2>Where does our seafood come from?</h2>
            <p>Seafood is the most affordable and accessible protein on the planet. Yet, we don’t even know where it comes from.</p>
          </div>
        </div>
      </div>

      <div className="row py-5">
        <div className="col-6 col-md-4 col-lg-3">
          <div className="custom-info-img info-3-img"></div>
        </div>
        <div className="col-8 col-md-8 col-lg-6">
          <div className="info-text">
            <h2>What fish to buy?</h2>
            <p>Knowing what kind of fish you are buying is the first step to making a sustainable choice.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
