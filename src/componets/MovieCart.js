import React from "react";
import { useNavigate } from "react-router-dom";

const ServiceCart = ({ service }) => {
  console.log(service.show);
  const { network, language, image, genres, id } = service.show;

  const navigate = useNavigate();

  const navigateSammery = (id) => {
    console.log("clide");
    navigate(`/summery/${id}`);
  };

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
            <button
              onClick={() => navigateSammery(id)}
              className="btn btn-primary text-white"
            >
              Summary
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCart;
