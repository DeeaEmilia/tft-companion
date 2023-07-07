/* eslint-disable react/prop-types */
import { useContext } from "react";
import { useDrag } from "react-dnd";
import { TraitContext } from "../context/TraitContext";
import Image from "next/image";
import champions from "../data/champions";

const ChampionIcon = ({ champion }) => {
  const { dispatch } = useContext(TraitContext);

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "champion",
    item: { id: champion.name, icon: champion.icon },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
    end: (item, monitor) => {
      if (monitor.didDrop()) {
        dispatch({ type: "ADD_CHAMPION", champion });
      }
    },
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
