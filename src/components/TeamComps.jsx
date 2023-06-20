import classes from "./TeamComps.module.scss";
import comps from "../data/comps";
import { useState } from "react";
import Champions from "./Champions/Champions";

const TeamComps = () => {
  const [hoveredChampion, setHoveredChampion] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <main className={classes.wrapper}>
      <h1>TFT Companion</h1>
      <h2>Meta Team Comps </h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et aut aliquid
        saepe odit laboriosam? Laudantium explicabo aliquam velit commodi sint
        nemo id perferendis maxime voluptatibus.
      </p>
      {/* .map function lets us manipulate the items in an array by iterating and accessing individual items. */}
      {comps.map((comp) => (
        // key helps React identify which items have changed
        <section className={classes.compsWrapper} key={comp.name}>
          <div className={classes.flexComp}>
            <h3>{comp.name}</h3>
            <div>
              <p>
                <strong>Playstyle: </strong> {comp.playstyle}
              </p>{" "}
              <p>
                <strong>Condition:</strong> {comp.conditions.join(", ")}
              </p>
            </div>
          </div>

          <Champions
            comp={comp}
            hoveredChampion={hoveredChampion}
            setHoveredChampion={setHoveredChampion}
            hoveredItem={hoveredItem}
            setHoveredItem={setHoveredItem}
          />
        </section>
      ))}
    </main>
  );
};

export default TeamComps;
