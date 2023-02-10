export const getCategories = async (categories) => {
  const url = `https://api.giphy.com/v1/gifs/categories/${categories}?api_key=${
    import.meta.env.VITE_GIPHY_API_KEY
  }&limit=12`;

  const resp = await fetch(url);
  const { data } = await resp.json();
  // console.log(data);

  const gifs = data.map((img) => ({
    id: img.gif.id,
    title: img.name,
    url: img.gif.images.downsized_medium.url,
  }));
  return gifs;
};
