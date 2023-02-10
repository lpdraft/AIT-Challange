import { useState, useEffect } from "react";

export const useFetchTrending = (endpoint) => {
  const [isLoading, setIsLoading] = useState(true);
  const [trends, setTrends] = useState([]);

  const getAllTrends = async () => {
    const url = `https://api.giphy.com/v1/gifs/trending?api_key=${
      import.meta.env.VITE_GIPHY_API_KEY
    }&limit=10`;

    const resp = await fetch(url);
    const { data } = await resp.json({});

    const gifs = data.map((img) => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    }));

    setTrends(gifs);
  };

  useEffect(() => {
    getAllTrends();
  }, []);

  return {
    trends,
    isLoading,
  };
};
