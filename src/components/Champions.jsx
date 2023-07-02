/* eslint-disable react/prop-types */
import Link from "next/link";
import champions from "../data/champions";
import ChampionCard from "./ChampionCard";

const Champions = ({
  comp,
  setHoveredChampion,
  setHoveredItem,
  hoveredChampion,
  hoveredItem,
}) => {
  return (
    <div className="c-wrapper flex-wrap">
      <div className="flex-wrap">
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
      <div>
        <Link href={`/team-page/${comp.name}`}>
          <button className="btn" id="builderButton">
            &rarr;
          </button>
        </Link>
        <label className="btn-label" htmlFor="builderButton">
          See in builder
        </label>
      </div>
    </div>
  );
};

export default Champions;
