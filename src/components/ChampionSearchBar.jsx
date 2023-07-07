/* eslint-disable react/prop-types */
import { useState } from "react";
import { championsData } from "./ChampionIcons";

function ChampionSearchBar({ onSearch }) {
  const [searchInput, setSearchInput] = useState({
    name: "",
    trait: "",
    cost: "",
  });

  // Extract unique traits and costs directly within the component
  const allChampions = championsData;
  const allTraits = Array.from(
    new Set(championsData.flatMap((champion) => champion.traits))
  );
  const allCosts = Array.from(
    new Set(championsData.map((champion) => champion.cost))
  );

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
      name: "",
      trait: "",
      cost: "",
    });
    onSearch({ name: "", trait: "", cost: "" });
  };

  if (!allChampions || !allTraits || !allCosts) {
    return <p>Loading...</p>;
  }

  return (
    <form className="sb-search-form" onSubmit={handleFormSubmit}>
      <fieldset className="sb-input-wrapper">
        <input
          list="champions"
          name="name"
          placeholder="Search by Name"
          value={searchInput.name}
          onChange={handleInputChange}
        />
        <datalist id="champions">
          {allChampions.map((champion, index) => (
            <option key={index} value={champion.name} />
          ))}
        </datalist>
      </fieldset>

      <fieldset className="sb-input-wrapper">
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
      </fieldset>

      <fieldset className="sb-input-wrapper">
        <input
          list="costs"
          name="cost"
          placeholder="Search by Cost"
          value={searchInput.cost}
          onChange={handleInputChange}
        />
        <datalist id="costs">
          {allCosts.map((cost, index) => (
            <option key={index} value={cost} />
          ))}
        </datalist>
      </fieldset>

      <button type="submit" className="sb-search-btn">
        Search
      </button>
      <button onClick={handleReset} className="sb-search-btn">
        Reset
      </button>
    </form>
  );
}

export default ChampionSearchBar;
