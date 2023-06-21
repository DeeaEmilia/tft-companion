import classes from "./TeamComps.module.scss";
import comps from "../../data/comps";
import { useEffect, useState } from "react";
import Champions from "../Champions/Champions";
import CompSearchBar from "../CompSearchBar/CompSearchBar";

const TeamComps = () => {
  const [hoveredChampion, setHoveredChampion] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [filteredComps, setFilteredComps] = useState(comps); // Initially show all comps
  const [allChampions, setAllChampions] = useState([]);
  const [allTraits, setAllTraits] = useState([]);

  useEffect(() => {
    let champions = [];
    let traits = [];
    for (let comp of comps) {
      for (let champion of comp.champions) {
        if (!champions.includes(champion.name)) {
          champions.push(champion.name);
        }
        for (let trait of champion.traits) {
          if (!traits.includes(trait)) {
            traits.push(trait);
          }
        }
      }
    }
    // Sort champions and traits
    champions.sort();
    traits.sort();

    setAllChampions(champions);
    setAllTraits(traits);
  }, []);

  const handleSearch = (searchInput) => {
    const championSearchValue = searchInput.champion.toLowerCase();
    const traitSearchValue = searchInput.trait.toLowerCase();

    let newFilteredComps = comps;

    // Filter by champion if the user entered a champion name
    if (championSearchValue) {
      newFilteredComps = newFilteredComps.filter((comp) =>
        comp.champions.some((champion) =>
          champion.name.toLowerCase().includes(championSearchValue)
        )
      );
    }

    // Filter by trait if the user entered a trait
    if (traitSearchValue) {
      newFilteredComps = newFilteredComps.filter((comp) =>
        comp.champions.some((champion) =>
          champion.traits.some((trait) =>
            trait.toLowerCase().includes(traitSearchValue)
          )
        )
      );
    }

    // Update the state with the newly filtered list of comps
    setFilteredComps(newFilteredComps);
  };

  return (
    <main className={classes.wrapper}>
      <h1>TFT Companion</h1>
      <h2>Meta Team Comps </h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et aut aliquid
        saepe odit laboriosam? Laudantium explicabo aliquam velit commodi sint
        nemo id perferendis maxime voluptatibus.
      </p>
      <CompSearchBar
        onSearch={handleSearch}
        allChampions={allChampions}
        allTraits={allTraits}
      />
      {filteredComps.map((comp) => (
        <section className={classes.compsWrapper} key={comp.name}>
          <div className={classes.flexComp}>
            <div className={classes.compTitle}>
              <img
                src={comp.tierImage}
                alt={`${comp.tier} tier`}
                className={classes.tierImage}
              />
              <h3>{comp.name}</h3>
            </div>
            <div>
              <p>
                <strong>Playstyle: </strong> {comp.playstyle}
              </p>{" "}
              <p>
                <strong>Condition:</strong> {comp.conditions}
              </p>
            </div>
          </div>

          <Champions
            comp={comp}
            hoveredChampion={hoveredChampion}
            setHoveredChampion={setHoveredChampion}
            hoveredItem={hoveredItem}
            setHoveredItem={setHoveredItem}
          />
        </section>
      ))}
    </main>
  );
};

export default TeamComps;
