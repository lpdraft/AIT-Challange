import { useState, useEffect } from "react";
import { getCategories } from "../helpers/getCategories";

export const useFetchCategories = (categories) => {
  const [isLoading, setIsLoading] = useState(true);
  const [gifs, setGifs] = useState([]);

  const getAllCategoryGifs = async () => {
    const singleGifs = await getCategories(categories);
    setGifs(singleGifs);
    setIsLoading(false);
  };

  useEffect(() => {
    getAllCategoryGifs();
  }, []);

  return {
    gifs,
    isLoading,
  };
};
