import { GifItem, Spinner } from "../components";

import { useFetchData } from "../hooks/useFetchData";

export const GifsList = ({ category }) => {
  const { isLoading, gifs } = useFetchData(category);
  return (
    <>
      {/* category = searchKey */}
      <h1 className="mt-5 text-center">{category}</h1>
      {isLoading && <Spinner />}
      <div className="card-grid">
        {gifs.map((singleGif) => {
          return <GifItem key={singleGif.id} singleGif={singleGif} />;
        })}
      </div>
    </>
  );
};
