import { useState } from "react";
import { GifsList } from "./components/GifsList";
import { InputAddSearchGifs } from "./components/InputAddSearchGifs";

const GifApp = () => {
  const [categories, setCategories] = useState(["Demon Slayer"]);

  const onAddCategory = (onNewEvtGifs) => {
    // setCategories(["Naruto", ...categories]);
    if (categories.includes(onNewEvtGifs)) return;
    setCategories([onNewEvtGifs, ...categories]);
  };

  return (
    <>
      <InputAddSearchGifs onSearchedGif={(e) => onAddCategory(e)} />

      {categories.map((category) => {
        return <GifsList key={category} category={category} />;
      })}
    </>
  );
};

export default GifApp;
