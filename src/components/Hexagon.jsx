/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { useDrop } from "react-dnd";
import { TraitContext } from "../context/TraitContext";
import { ChampionContext } from "../context/ChampionContext";

const Hexagon = ({ position }) => {
  const [champion, setChampion] = useState(null);
  const { dispatch } = useContext(TraitContext);
  const { setChampions } = useContext(ChampionContext);

  const [, drop] = useDrop(() => ({
    accept: "champion",
    drop: (item) => {
      // Generate a unique id
      const newChampion = { ...item, id: Math.random() };

      dispatch({ type: "ADD_CHAMPION", champion: newChampion });
      setChampion(newChampion);
      setChampions((prevChamps) =>
        prevChamps.map((champ) =>
          champ.name === item.name ? { ...champ, position } : champ
        )
      );
    },
  }));

  return (
    <section className="hexagon-border">
      <div
        ref={drop}
        style={{
          backgroundImage: `url(${champion?.icon || ""})`,
          backgroundSize: "contain",
          width: "100%",
          height: "100%",
          clipPath:
            "polygon(50% 0, 100% 23%, 100% 74%, 50% 100%, 0 75%, 0 24%)",
          boxSizing: "border-box",
        }}
        onDoubleClick={() => {
          if (champion) {
            // Check if champion exists
            dispatch({
              type: "REMOVE_CHAMPION",
              champion: {
                id: champion.id,
                name: champion.name,
                icon: champion.icon,
                traits: champion.traits,
              },
            });
            setChampion(null);
            setChampions((prevChamps) =>
              prevChamps.map((champ) =>
                champ.name === champion.name
                  ? { ...champ, position: null }
                  : champ
              )
            );
          }
        }}>
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          fill="transparent"
          xmlns="http://www.w3.org/2000/svg">
          <g>
            <polygon
              className="hexagon"
              points="2.1,73.8 2.1,26.2 43.6,2.3 85,26.2 85,73.8 43.6,97.7"
            />
          </g>
        </svg>
      </div>
    </section>
  );
};

export default Hexagon;
