import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
export const GifInfo = () => {
  const [gifs, setGifs] = useState({});
  const { id } = useParams();
  const getSingleGifs = async () => {
    const respData = await axios.get(
      `http://localhost:5000/api/memes/single/${id}`
    );
    setGifs(respData.data);
  };
  console.log(gifs);

  useEffect(() => {
    getSingleGifs();
  }, []);
  return (
    <div className="card">
      <h3>{gifs?.data?.title}</h3>
      <img src={gifs?.data?.image} alt={gifs?.data?.title} />
      <p>{gifs?.data?.gifType}</p>
    </div>
  );
};
