import React, { useState } from "react";
import { useQuery } from "react-query";
import ServiceCart from "../componets/ServiceCart";

const Home = () => {
  const {
    data: services,
    isLoading,
    refetch,
  } = useQuery("services", () =>
    fetch(`https://api.tvmaze.com/search/shows?q=all`).then((res) => res.json())
  );

  if (isLoading) {
    return <p>isLoading</p>;
  }

  return (
    <div className="my-16 mx-auto container px-5">
      <h4 className="text-2xl font-bold text-primary text-center my-12">
        All Services
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {services.map((service) => (
          <ServiceCart key={service._id} service={service}></ServiceCart>
        ))}
      </div>
    </div>
  );
};

export default Home;
