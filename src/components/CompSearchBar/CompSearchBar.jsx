/* eslint-disable react/prop-types */
import { useState } from "react";
import classes from "./CompSearchBar.module.scss";

function CompSearchBar({ onSearch, allChampions, allTraits }) {
  const [searchInput, setSearchInput] = useState({
    champion: "",
    trait: "",
  });

  const handleInputChange = (event) => {
    setSearchInput({
      ...searchInput,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSearch(searchInput);
  };

  return (
    <form className={classes.searchForm} onSubmit={handleFormSubmit}>
      <div className={classes.inputContainer}>
        <input
          list="champions"
          name="champion"
          placeholder="Search by Champion"
          onChange={handleInputChange}
        />
        <datalist id="champions">
          {allChampions.map((champion, index) => (
            <option key={index} value={champion} />
          ))}
        </datalist>
      </div>

      <div className={classes.inputContainer}>
        <input
          list="traits"
          name="trait"
          placeholder="Search by Trait"
          onChange={handleInputChange}
        />
        <datalist id="traits">
          {allTraits.map((trait, index) => (
            <option key={index} value={trait} />
          ))}
        </datalist>
      </div>

      <button type="submit" className={classes.searchButton}>
        Search
      </button>
    </form>
  );
}

export default CompSearchBar;
