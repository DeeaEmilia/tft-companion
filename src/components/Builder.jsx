import { useState } from "react";
import HexGrid from "./HexGrid";
import ChampionIcons from "./ChampionIcons";
import ActiveTraits from "../components/ActiveTraits";
import ChampionSearchBar from "./ChampionSearchBar";
import { championsData } from "./ChampionIcons";

const Builder = () => {
  // Initialize searchInput state with useState hook
  const [searchInput, setSearchInput] = useState({
    name: "",
    trait: "",
    cost: "",
  });

  // Define the function to update searchInput state
  const handleSearch = (newSearchInput) => {
    setSearchInput(newSearchInput);
  };

  // Create filteredChampions array by filtering championsData based on search input
  const filteredChampions = championsData.filter((champion) => {
    // If there's a search term in "name", check if the champion name includes it
    const nameMatch = searchInput.name
      ? champion.name.toLowerCase().includes(searchInput.name.toLowerCase())
      : true;
    // If there's a search term in "trait", check if the champion traits include it
    const traitMatch = searchInput.trait
      ? champion.traits.includes(searchInput.trait)
      : true;
    // If there's a search term in "cost", check if the champion cost matches it
    const costMatch = searchInput.cost
      ? champion.cost === Number(searchInput.cost)
      : true;

    // A champion passes the filter if it matches all searched terms
    return nameMatch && traitMatch && costMatch;
  });

  // Render the Builder component
  return (
    <section className="builder-wrapper">
      <div className="builder">
        {/* Render ActiveTraits and HexGrid components */}
        <ActiveTraits />
        <HexGrid />
      </div>
      {/* Render ChampionSearchBar and pass handleSearch as a prop for onSearch event */}
      <ChampionSearchBar onSearch={handleSearch} />
      {/* Render ChampionIcons and pass the filteredChampions as a prop */}
      <ChampionIcons champions={filteredChampions} />
    </section>
  );
};

export default Builder;
