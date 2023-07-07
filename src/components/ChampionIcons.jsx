/* eslint-disable react/prop-types */
import { useDrag } from "react-dnd";
import Image from "next/image";
import champions from "../data/champions";

const ChampionIcon = ({ champion }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "champion",
    item: { id: champion.name, icon: champion.icon, traits: champion.traits },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <section ref={drag}>
      <Image
        src={champion.icon}
        alt={`${champion.name} icon`}
        width={70}
        height={70}
        style={{ border: isDragging ? "5px solid pink" : "0px" }}
      />
    </section>
  );
};

const ChampionsIcons = () => (
  <section className="builder-icons">
    {champions.map((champion) => (
      <ChampionIcon key={champion.name} champion={champion} />
    ))}
  </section>
);

export default ChampionsIcons;
