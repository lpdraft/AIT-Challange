// import { useFetchEndpoints } from "../hooks/useFetchTrending";
import { useEffect, useState } from "react";
import { useRandomGif } from "../hooks/useRandomGif";
import styles from "./styles.module.scss";

export const RandomGifs = () => {
  const { gifs, handleGifs } = useRandomGif();

  return (
    <div className={styles.containerPages}>
      <div className="card">
        <div className={styles.categoryCard}>
          <h3>{gifs.title}</h3>
          <img src={gifs.images?.downsized_medium?.url} />
          <button
            className="btn btn-success w-100 p-4"
            onClick={() => handleGifs()}
          >
            <span>Next Random Gif</span>
          </button>
        </div>
      </div>
    </div>
  );
};
