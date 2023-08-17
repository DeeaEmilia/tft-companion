/* eslint-disable react/prop-types */
import { useDrag } from "react-dnd";
import { useState } from "react";
import Image from "next/image";
import champions from "../data/champions";
import traitsData from "../data/traits";
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

  // Add state to control visibility of hover effect
  const [isHovering, setHovering] = useState(false);

  return (
    <section
      ref={drag}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      style={{
        opacity: isDragging ? 0 : 1,
      }}>
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
      {isHovering && (
        <div className="tooltip-champ visible">
          <h3>{champion.name}</h3>
          <Image
            className="tooltip-champ-icon"
            src={champion.icon}
            alt={`${champion.name} icon`}
            width={170}
            height={170}
          />
          <div className="champion-details">
            <div>
              {champion.traits.map((traitName) => {
                const trait = traitsData.find(
                  (traitItem) => traitItem.name === traitName
                );
                return (
                  <span className="trait-name flex-display" key={traitName}>
                    <Image
                      src={trait.emblem}
                      alt={traitName}
                      style={{ height: "1em" }}
                      width={50}
                      height={50}
                    />{" "}
                    {traitName}
                  </span>
                );
              })}
            </div>
            <div className="cost-wrapper flex-display">
              <Image
                src="/assets/icon-gold.svg"
                alt="gold icon"
                className="gold-icon"
                width={50}
                height={50}
              />
              {champion.cost}
            </div>
          </div>
        </div>
      )}
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
