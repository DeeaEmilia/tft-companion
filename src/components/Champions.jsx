/* eslint-disable react/prop-types */
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
    <section className="flex-wrap">
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
    </section>
  );
};

export default Champions;
