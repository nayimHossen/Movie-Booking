import React from "react";

const ServiceCart = ({ service }) => {
  console.log(service.show);
  const { network, language, image, genres } = service.show;
  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src={image.original}
            alt="Album"
            className="h-[300px] md:w-[300px]"
          />
        </figure>
        <div className="card-body">
          <h2>Name: {network?.name}</h2>
          <p>Language: {language}</p>
          <p>Type: {genres[0]}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary text-white">Summary</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCart;
