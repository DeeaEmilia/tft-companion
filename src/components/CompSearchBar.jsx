/* eslint-disable react/prop-types */
import { useState } from "react";

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

  const handleReset = (event) => {
    event.preventDefault();
    setSearchInput({
      champion: "",
      trait: "",
    });
    onSearch({ champion: "", trait: "" });
  };

  return (
    <form className="sb-search-form" onSubmit={handleFormSubmit}>
      <div className="sb-input-wrapper">
        <input
          list="champions"
          name="champion"
          placeholder="Search by Champion"
          value={searchInput.champion}
          onChange={handleInputChange}
        />
        <datalist id="champions">
          {allChampions.map((champion, index) => (
            <option key={index} value={champion} />
          ))}
        </datalist>
      </div>

      <div className="sb-input-wrapper">
        <input
          list="traits"
          name="trait"
          placeholder="Search by Trait"
          value={searchInput.trait}
          onChange={handleInputChange}
        />
        <datalist id="traits">
          {allTraits.map((trait, index) => (
            <option key={index} value={trait} />
          ))}
        </datalist>
      </div>

      <button type="submit" className="sb-search-btn ">
        Search
      </button>
      <button onClick={handleReset} className="sb-search-btn ">
        {" "}
        Reset{" "}
      </button>
    </form>
  );
}

export default CompSearchBar;
