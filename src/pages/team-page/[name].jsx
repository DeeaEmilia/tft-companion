import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Champions from "../../components/Champions";

import comps from "../../data/comps";
import traits from "../../data/traits";

const TeamPage = () => {
  // Getting the name parameter from the URL
  const router = useRouter();
  const { name } = router.query;

  // Finding the corresponding comp
  const comp = comps.find((comp) => comp.name === name);

  // Get the state and setter from context
  const [hoveredChampion, setHoveredChampion] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);

  // If there's no comp found, we return null or a "not found" message
  if (!comp) {
    return <h1>Comp not found</h1>;
  }

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

  const filteredTraits = countTraits(comp.champions);

  // Display the comp data
  return (
    <div>
      <main className="main-wrapper">
        <div className="content-wrapper">
          <div className="page-title-wrapper">
            <div className="page-title">
              <Image
                src={comp.tierImage}
                className="tier-icon"
                alt={`${comp.tier} tier`}
                width={16}
                height={16}
              />
              <h2>{comp.name}</h2>
            </div>
            <button className="btn" onClick={() => router.back()}>
              Go back
            </button>
          </div>

          <div className="info-card-wrapper flex-display">
            <h3> Traits:</h3>
            {Object.entries(filteredTraits).map(([traitName, count]) => {
              const traitData = traits.find((t) => t.name === traitName);
              return (
                <div key={traitName} className="trait-wrapper flex-display">
                  <Image
                    src={traitData?.emblem}
                    alt={`${traitName} emblem`}
                    width={16}
                    height={16}
                  />
                  <p>
                    {traitName}: {count}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="info-card-wrapper flex-display">
            <h3>Recommended Legends:</h3>
          </div>

          <div className="info-card-wrapper flex-display">
            <h3>Carousel Priority:</h3>
          </div>

          <div className="info-card-wrapper flex-display">
            <h3>Recommended Augments:</h3>
          </div>

          <div className="p-champions-wrapper">
            <Champions
              comp={comp}
              hoveredChampion={hoveredChampion}
              setHoveredChampion={setHoveredChampion}
              hoveredItem={hoveredItem}
              setHoveredItem={setHoveredItem}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default TeamPage;
