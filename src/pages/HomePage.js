import { useEffect, useState } from "react";
import HeroBanner from "../componets/HeroBanner";
import ServiceCart from "../componets/MovieCart";

const HomePage = () => {
  const [moviesData, setMoviesData] = useState([]);

  useEffect(() => {
    fetch(`https://api.tvmaze.com/search/shows?q=all`)
      .then((data) => data.json())
      .then((data) => setMoviesData(data));
  }, []);

  return (
    <>
      <HeroBanner />
      <div className="my-16 mx-auto container px-5">
        <h4 className="text-3xl font-bold text-primary text-center my-10">
          Populer Movies
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {moviesData.map((service) => (
            <ServiceCart key={service._id} service={service}></ServiceCart>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
