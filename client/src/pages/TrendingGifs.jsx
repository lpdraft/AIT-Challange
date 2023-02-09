import React, { useEffect } from "react";
import { useFetchData } from "../hooks/useFetchData";

export const TrendingGifs = () => {
  const { gifs } = useFetchData();
  console.log(gifs);
  return (
    <div className="container">
      {gifs.map((trend) => {
        return (
          <div key={trend.id} className="card">
            <h1>{trend.title}</h1>
            <img src={trend.url} alt="" />
          </div>
        );
      })}
    </div>
  );
};
