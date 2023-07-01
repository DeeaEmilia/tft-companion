/* eslint-disable react/prop-types */
import champions from "../data/champions";
import ChampionCard from "./ChampionCard";
import { Link } from "react-router-dom";

const Champions = ({
  comp,
  setHoveredChampion,
  setHoveredItem,
  hoveredChampion,
  hoveredItem,
}) => {
  return (
    <div className="c-flex-wrapper">
      <div className="c-comps-fig-wrapper">
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
              key={`${comp.name}-${champion.name}`}
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
      <div className="c-btn-wrapper">
        <Link to={`/TeamPage/${comp.name}`}>
          <button id="builderButton">&rarr;</button>
        </Link>
        <label htmlFor="builderButton">See in builder</label>
      </div>
    </div>
  );
};

export default Champions;
