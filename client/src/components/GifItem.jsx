export const GifItem = ({ singleGif }) => {
  const { id, title, url } = singleGif;
  return (
    <div className="card">
      <img src={url} />
      <p>{title}</p>
    </div>
  );
};
