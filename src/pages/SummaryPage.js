import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Booking from "../componets/Booking";

function SummaryPage() {
  const [movieData, setMovieData] = useState([]);

  const { network, language, image, summary } = movieData;

  const { id } = useParams();
  console.log(movieData);

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((data) => data.json())
      .then((data) => setMovieData(data));
  }, []);

  return (
    <div className="container mx-auto px-5 py-16">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src={image?.original}
            alt="Album"
            className="w-[500px] h-[300px]"
          />
        </figure>
        <div className="card-body md:w-[50%]">
          <h2>Name: {network?.name}</h2>
          <p>Language: {language}</p>
          {/* <p>Type: {genres[0]}</p> */}
          {summary}
          <div className="card-actions justify-end">
            {/* The button to open modal */}
            <label htmlFor="my-modal-6" className="btn btn-primary text-white">
              Booking
            </label>
          </div>
        </div>
      </div>

      {movieData && <Booking movieData={movieData}></Booking>}
    </div>
  );
}

export default SummaryPage;
