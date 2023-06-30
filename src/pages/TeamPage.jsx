import { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { HoveredContext } from "../context/HoveredContext";
import Champions from "../components/Champions/Champions";
import comps from "../data/comps";
import traits from "../data/traits";
import classes from "./TeamPage.module.scss";

const TeamPage = () => {
  // Getting the name parameter from the URL
  const { name } = useParams();

  // Finding the corresponding comp
  const comp = comps.find((comp) => comp.name === name);

  // Instantiate navigate
  const navigate = useNavigate();

  // Get the state and setter from context
  const { setHoveredChampion, setHoveredItem } = useContext(HoveredContext);

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
    <div className={classes.container}>
      <div className={classes.title}>
        <img
          src={comp.tierImage}
          className={classes.tierImage}
          alt={`${comp.tier} tier`}
        />
        <h1>{comp.name}</h1>

        {Object.entries(filteredTraits).map(([traitName, count]) => {
          const traitData = traits.find((t) => t.name === traitName);
          return (
            <div key={traitName} className={classes.traitName}>
              <img src={traitData?.emblem} alt={`${traitName} emblem`} />
              <p>
                {traitName}: {count}
              </p>
            </div>
          );
        })}
      </div>

      <div className={classes.championsWrapper}>
        <Champions
          comp={comp}
          setHoveredChampion={setHoveredChampion}
          setHoveredItem={setHoveredItem}
        />
      </div>
      <button className={classes.btn} onClick={() => navigate(-1)}>
        Go back
      </button>
    </div>
  );
};

export default TeamPage;
