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
        <div className="form-group mt-5">
          <input
            className="form-control"
            type="text"
            onChange={onInputChange}
            placeholder="Search your fav gifs..."
          />
        </div>
      </form>
    </div>
  );
};
