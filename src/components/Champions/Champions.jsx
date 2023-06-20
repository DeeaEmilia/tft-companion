/* eslint-disable react/prop-types */
import classes from "./Champions.module.scss";
import champions from "../../data/champions";
import ChampionCard from "../Champion/ChampionCard";

const Champions = ({
  comp,
  setHoveredChampion,
  setHoveredItem,
  hoveredChampion,
  hoveredItem,
}) => {
  return (
    <div className={classes.flexComp}>
      <div className={classes.compsFigureContainer}>
        {comp.champions.map((championComp) => {
          const champion = champions.find(
            (ch) => ch.name === championComp.name
          );

          if (!champion) {
            console.error(`No champion found for name: ${championComp.name}`);
            return null;
          }

          return (
            <ChampionCard
              key={comp.name}
              champion={champion}
              setHoveredChampion={setHoveredChampion}
              setHoveredItem={setHoveredItem}
              hoveredChampion={hoveredChampion}
              hoveredItem={hoveredItem}
              comp={comp}
              championComp={championComp}
            />
          );
        })}
      </div>
      <div className={classes.btnContainer}>
        <button>&rarr;</button>
        <label htmlFor="button">See in builder</label>
      </div>
    </div>
  );
};

export default Champions;
