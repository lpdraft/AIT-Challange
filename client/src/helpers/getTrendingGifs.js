export const getTrendingGifs = async () => {
  const url = `https://api.giphy.com/v1/gifs/trending?api_key=${
    import.meta.env.VITE_GIPHY_API_KEY
  }&limit=10`;

  const resp = await fetch(url);
  const { data } = await resp.json();
  //   console.log(data);
  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));
  //   console.log(gifs);
  return {
    gifs,
  };
};
