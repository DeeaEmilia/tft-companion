import classes from "./TeamComps.module.scss";
import comps from "../../data/comps";
import { useEffect, useState } from "react";
import Champions from "../Champions/Champions";
import CompSearchBar from "../CompSearchBar/CompSearchBar";

const TeamComps = () => {
  const [hoveredChampion, setHoveredChampion] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [filteredComps, setFilteredComps] = useState(comps);
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
    champions.sort();
    traits.sort();
    setAllChampions(champions);
    setAllTraits(traits);

    const tierValues = {
      S: 1,
      A: 2,
      "A-": 3,
      B: 4,
      C: 5,
      D: 6,
    };
    const sortedComps = comps.sort((compA, compB) => {
      return tierValues[compA.tier] - tierValues[compB.tier];
    });
    setFilteredComps(sortedComps);
  }, []);

  const handleSearch = (searchInput) => {
    const championSearchValue = searchInput.champion.toLowerCase();
    const traitSearchValue = searchInput.trait.toLowerCase();
    let newFilteredComps = comps;

    if (championSearchValue) {
      newFilteredComps = newFilteredComps.filter((comp) =>
        comp.champions.some((champion) =>
          champion.name.toLowerCase().includes(championSearchValue)
        )
      );
    }

    if (traitSearchValue) {
      newFilteredComps = newFilteredComps.filter((comp) =>
        comp.champions.some((champion) =>
          champion.traits.some((trait) =>
            trait.toLowerCase().includes(traitSearchValue)
          )
        )
      );
    }

    setFilteredComps(newFilteredComps);
  };

  const countTraits = (champions) => {
    const traitsCounts = {};

    champions.forEach((champion) => {
      champion.traits.forEach((trait) => {
        if (!traitsCounts[trait]) {
          traitsCounts[trait] = 1;
        } else {
          traitsCounts[trait] += 1;
        }
      });
    });

    return traitsCounts;
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
      {filteredComps.map((comp) => {
        const traitCounts = countTraits(comp.champions);
        return (
          <section className={classes.compsWrapper} key={comp.name}>
            <div className={classes.flexComp}>
              <div className={classes.compTitle}>
                <img
                  src={comp.tierImage}
                  alt={`${comp.tier} tier`}
                  className={classes.tierImage}
                />
                <h3>{comp.name}</h3>
                {Object.entries(traitCounts).map(([trait, count]) => (
                  <p key={trait}>
                    {trait}: {count}
                  </p>
                ))}
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
        );
      })}
    </main>
  );
};

export default TeamComps;
