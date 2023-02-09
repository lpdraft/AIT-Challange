import { useState, useEffect } from "react";
import { getGifData } from "../helpers/getGifData";
import { getTrendingGifs } from "../helpers/getTrendingGifs";

export const useFetchData = (category) => {
  const [isLoading, setIsLoading] = useState(true);
  const [gifs, setGifs] = useState([]);
  const [trends, setTrends] = useState([]);

  const getAllGifs = async () => {
    // From helper
    const newGifs = await getGifData(category);
    const newTrends = await getTrendingGifs();
    setGifs(newGifs);
    setTrends(newTrends);
    setIsLoading(false);
  };
  // console.log(trends)

  useEffect(() => {
    getAllGifs();
  }, []);

  return {
    gifs,
    trends,
    isLoading,
  };
};
