import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./styles.module.scss";

import { useNavigate } from "react-router-dom";
export const UserGifs = () => {
  const navigate = useNavigate();
  const [gifs, setGifs] = useState();

  const getAllGifs = async () => {
    const respData = await axios.get("http://localhost:5000/api/memes");
    setGifs(respData.data);
  };
  console.log(gifs);

  useEffect(() => {
    getAllGifs();
  }, []);

  return (
    <div>
      {gifs?.data?.map((g) => {
        return (
          <div className={styles.containerPages} key={g._id}>
            <div className="card">
              <h2>{g.title}</h2>
              <img src={g.image} alt={g.title} />
              <p>Type: {g.gifType}</p>
            </div>
            <div>
              <button
                onClick={() => navigate(`/gif-info/${g._id}`)}
                className="btn btn-outline-info"
              >
                View
              </button>
              <button
                // onClick={handleDelete(_id)}
                className="btn btn-outline-danger"
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
