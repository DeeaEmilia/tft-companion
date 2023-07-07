import { useState } from "react";
import HexGrid from "./HexGrid";
import ChampionIcons from "./ChampionIcons";
import ActiveTraits from "../components/ActiveTraits";
import ChampionSearchBar from "./ChampionSearchBar";
import { championsData } from "./ChampionIcons";

const Builder = () => {
  const [searchInput, setSearchInput] = useState({
    name: "",
    trait: "",
    cost: "",
  });

  const handleSearch = (newSearchInput) => {
    setSearchInput(newSearchInput);
  };

  // Filtering logic for the champions based on search input
  const filteredChampions = championsData.filter((champion) => {
    const nameMatch = searchInput.name
      ? champion.name.toLowerCase().includes(searchInput.name.toLowerCase())
      : true;
    const traitMatch = searchInput.trait
      ? champion.traits.includes(searchInput.trait)
      : true;
    const costMatch = searchInput.cost
      ? champion.cost === Number(searchInput.cost)
      : true;

    return nameMatch && traitMatch && costMatch;
  });

  return (
    <section className="builder-wrapper">
      <div className="builder">
        <ActiveTraits />
        <HexGrid />
      </div>
      <ChampionSearchBar onSearch={handleSearch} />
      <ChampionIcons champions={filteredChampions} />
    </section>
  );
};

export default Builder;
