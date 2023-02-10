import { useState, useEffect } from "react";

export const useRandomGif = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [counter, setCounter] = useState([]);
  const [gifs, setGifs] = useState([]);

  const getAllRandom = async () => {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${
      import.meta.env.VITE_GIPHY_API_KEY
    }`;

    const resp = await fetch(url);
    const { data } = await resp.json({});
    setGifs(data);
    // console.log(data);
  };
  const handleGifs = () => {
    setCounter({ ...gifs, gifs });
  };

  useEffect(() => {
    getAllRandom();
  }, [counter]);

  return {
    gifs,
    isLoading,
    handleGifs,
  };
};
