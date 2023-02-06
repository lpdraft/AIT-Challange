import { useState } from "react";

export const InputAddSearchGifs = ({ onSearchedGif }) => {
  const [searchedValue, setSearchedValue] = useState("");

  const onInputChange = (evt) => {
    setSearchedValue(evt.target.value);
  };
  // console.log(searchedValue);

  const onFormSubmit = (evt) => {
    evt.preventDefault();
    if (searchedValue.trim().length <= 2 || "") return;
    onSearchedGif(searchedValue.trim());
    setSearchedValue("");
  };

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          // value={searchedValue}
          onChange={onInputChange}
          placeholder="Search your fav gifs..."
        />
      </form>
    </div>
  );
};
