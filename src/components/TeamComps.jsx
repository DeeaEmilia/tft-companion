import { useContext, useEffect, useState } from "react";
import { TraitContext } from "../context/TraitContext";
import Image from "next/image";
import Champions from "./Champions";
import CompSearchBar from "./CompSearchBar";
import comps from "../data/comps";
import traits from "../data/traits";

const TeamComps = () => {
  const [hoveredChampion, setHoveredChampion] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [filteredComps, setFilteredComps] = useState(comps);
  const [allChampions, setAllChampions] = useState([]);
  const [noCompsMessage, setNoCompsMessage] = useState("");

  const { allTraits, setAllTraits } = useContext(TraitContext);

  const updateTraits = () => {
    let traits = [];
    for (let comp of comps) {
      for (let champion of comp.champions) {
        for (let trait of champion.traits) {
          if (!traits.includes(trait)) {
            traits.push(trait);
          }
        }
      }
    }
    traits.sort();
    setAllTraits(traits);
  };

  useEffect(() => {
    updateTraits();
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

    // Check if the comps list is empty after filtering. If it is, display the "No comps found" message
    if (newFilteredComps.length === 0) {
      setNoCompsMessage("No comps found with the selected champion or trait.");
    } else {
      setNoCompsMessage("");
    }

    setFilteredComps(newFilteredComps);
  };

  const countTraits = (champions) => {
    const traitCounts = {};

    champions.forEach((champion) => {
      champion.traits.forEach((trait) => {
        if (!traitCounts[trait]) {
          traitCounts[trait] = 1;
        } else {
          traitCounts[trait] += 1;
        }
      });
    });

    const filteredTraitCounts = {};

    for (let trait in traitCounts) {
      const traitData = traits.find((t) => t.name === trait);
      const firstTier = parseInt(traitData.scaling[0][0]);
      if (traitCounts[trait] >= firstTier) {
        filteredTraitCounts[trait] = traitCounts[trait];
      }
    }

    return filteredTraitCounts;
  };

  return (
    <main className="padding">
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
      {filteredComps.length === 0 ? (
        <p>{noCompsMessage}</p>
      ) : (
        filteredComps.map((comp) => {
          const traitCounts = countTraits(comp.champions);
          return (
            <section className="comps-wrapper" key={comp.name}>
              <div className="comps-info flex-wrap">
                <div className="comps-title flex-wrap">
                  <Image
                    src={comp.tierImage}
                    alt={`${comp.tier} tier`}
                    className="tier-icon"
                    width={32}
                    height={32}
                  />
                  <h3>{comp.name}</h3>
                </div>
                <div className="comps-traits">
                  {Object.entries(traitCounts).map(([trait, count]) => {
                    return (
                      <div key={trait}>
                        <p>
                          {trait}: {count}
                        </p>
                      </div>
                    );
                  })}
                </div>
                <p>
                  <strong>Playstyle: </strong> {comp.playstyle}
                </p>{" "}
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
        })
      )}
    </main>
  );
};

export default TeamComps;
