import React from "react";
import bannerImg from "../image/banner.jpg";

const HeroBanner = () => {
  return (
    <div>
      <div
        className="hero h-96"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <div className="hero-overlay bg-[#222] bg-opacity-70"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Booking Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
