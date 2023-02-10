import { useState, useEffect } from "react";
import { getGifData } from "../helpers/getGifData";

export const useFetchData = (category) => {
  const [isLoading, setIsLoading] = useState(true);
  const [gifs, setGifs] = useState([]);

  const getAllGifs = async () => {
    // From helper
    const newGifs = await getGifData(category);
    setGifs(newGifs);
    setIsLoading(false);
  };
  // console.log(trends)

  useEffect(() => {
    getAllGifs();
  }, []);

  return {
    gifs,
    isLoading,
  };
};
