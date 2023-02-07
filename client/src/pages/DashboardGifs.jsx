import { useState } from "react";
import { InputAddSearchGifs, GifsList } from "../components";

export const DashboardGifs = () => {
  const [categories, setCategories] = useState([""]);

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
