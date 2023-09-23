/* eslint-disable react/prop-types */
import { useDrag } from "react-dnd";
import Image from "next/image";
import champions from "../data/champions";
import costColors from "../data/costColors";
//add button on champion icons to remove them both on mobile and desktop

const ChampionIcon = ({ champion }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "champion",
    item: {
      id: champion.name,
      icon: champion.icon,
      traits: champion.traits,
      cost: champion.cost,
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
    options: {
      captureDraggingState: true,
    },
  }));

  return (
    <section
      ref={drag}
      className={`champion-icon-shadow ${isDragging ? "is-dragging" : ""}`}>
      <Image
        src={champion.icon}
        alt={`${champion.name} icon`}
        width={70}
        height={70}
        style={{
          border: `3px solid ${costColors[champion.cost]}`,
          borderRadius: "50px",
          cursor: isDragging ? "grabbing" : "pointer",
        }}
      />

      {/* Show additional champion information when hovering */}
    </section>
  );
};

const ChampionsIcons = ({ champions }) => {
  // Sort champions based on cost
  const sortedChampions = [...champions].sort((a, b) => a.cost - b.cost);

  return (
    <section className="builder-icons">
      {sortedChampions.map((champion) => (
        <ChampionIcon key={champion.name} champion={champion} />
      ))}
    </section>
  );
};

export const championsData = champions;
export default ChampionsIcons;
