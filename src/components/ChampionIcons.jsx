/* eslint-disable react/prop-types */
import Image from "next/image";
import champions from "../data/champions";
import { useDrag } from "react-dnd";

const ChampionIcon = ({ champion }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "champion",
    item: { id: champion.name, icon: champion.icon },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div ref={drag}>
      <Image
        src={champion.icon}
        alt={`${champion.name} icon`}
        width={70}
        height={70}
        style={{ border: isDragging ? "5px solid pink" : "0px" }}
      />
    </div>
  );
};

const ChampionsIcons = () => (
  <div className="builder-icons">
    {champions.map((champion) => (
      <ChampionIcon key={champion.name} champion={champion} />
    ))}
  </div>
);

export default ChampionsIcons;
