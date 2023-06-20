import classes from "./TeamComps.module.scss";
import comps from "../data/comps";
import champions from "../data/champions";
import items from "../data/items";
import componentsData from "../data/components";
import costColors from "../data/costColors";
import traitsData from "../data/traits";
import { useState } from "react";

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
          <div className={classes.flexComp}>
            <div className={classes.compsFigureContainer}>
              {comp.champions.map((championComp) => {
                const champion = champions.find(
                  (ch) => ch.name === championComp.name
                );

                if (!champion) {
                  console.error(
                    `No champion found for name: ${championComp.name}`
                  );
                  return null;
                }

                return (
                  <figure
                    className={classes.champions}
                    key={
                      champion.name
                        ? `${comp.name}-${champion.name}`
                        : `${comp.name}-${Math.random().toString()}`
                    }>
                    <div className={classes.itemHolder}>
                      <div
                        className={`${classes.tooltipChamp} ${
                          hoveredChampion === `${comp.name}-${champion.name}`
                            ? classes.visible
                            : ""
                        }`}>
                        <h3>{champion.name}</h3>
                        <img
                          className={classes.tooltipChampIcon}
                          src={champion.icon}
                          alt={`${champion.name} icon`}
                        />

                        <div className={classes.details}>
                          <div>
                            {champion.traits.map((traitName) => {
                              const trait = traitsData.find(
                                (traitItem) => traitItem.name === traitName
                              );
                              return (
                                <span
                                  className={classes.traitName}
                                  key={traitName}>
                                  <img
                                    src={trait.emblem}
                                    alt={traitName}
                                    style={{ height: "1em" }}
                                  />{" "}
                                  {traitName}
                                </span>
                              );
                            })}
                          </div>
                          <div className={classes.costWrapper}>
                            <img
                              src="/assets/icon-gold.svg"
                              alt="gold icon"
                              className={classes.goldIcon}
                            />
                            {champion.cost}
                          </div>
                        </div>

                        <div className={classes.tooltipItem}>
                          {championComp.items.map((itemId, index) => {
                            const item = items.find(
                              (item) => item.id === itemId
                            );
                            if (item) {
                              return (
                                <div
                                  key={itemId + index}
                                  className={classes.tooltipItemIcon}
                                  onMouseEnter={() =>
                                    setHoveredItem(
                                      `${comp.name}-${champion.name}-${itemId}`
                                    )
                                  }
                                  onMouseLeave={() => setHoveredItem(null)}>
                                  <div className={classes.tooltipContainer}>
                                    <img
                                      src={item.icon}
                                      alt={item.name}
                                      className={classes.square}
                                    />
                                    <div
                                      className={`${classes.tooltipComponent} ${
                                        hoveredItem === itemId
                                          ? classes.visible
                                          : ""
                                      }`}>
                                      <h4>{item.name}</h4>
                                      <p>{item.description}</p>
                                      {item.components.map(
                                        (componentId, index) => {
                                          const component = componentsData.find(
                                            (comp) => comp.id === componentId
                                          );
                                          if (component) {
                                            return (
                                              <div
                                                key={
                                                  component.id + "-" + index
                                                }>
                                                <img
                                                  src={component.icon}
                                                  alt={component.name}
                                                  style={{ height: "1em" }}
                                                />
                                                <p>{component.name}</p>
                                                <p>{component.description}</p>
                                              </div>
                                            );
                                          }
                                          return null;
                                        }
                                      )}
                                    </div>
                                  </div>
                                </div>
                              );
                            } else {
                              console.error(
                                `Item with id ${itemId} not found for champion ${champion.name}.`
                              );
                              return null;
                            }
                          })}
                        </div>
                      </div>
                      <img
                        src={champion.icon}
                        alt={champion.name}
                        className={classes.championIcon}
                        style={{ borderColor: costColors[champion.cost] }}
                        onMouseEnter={() =>
                          setHoveredChampion(`${comp.name}-${champion.name}`)
                        }
                        onMouseLeave={() => setHoveredChampion(null)}
                      />
                      <div className={classes.itemWrapper}>
                        {championComp.items.map((itemId, index) => {
                          const item = items.find((item) => item.id === itemId);
                          if (item) {
                            return (
                              <img
                                key={itemId + index}
                                src={item.icon}
                                alt={item.name}
                                className={classes.square}
                              />
                            );
                          } else {
                            console.error(
                              `Item with id ${itemId} not found for champion ${champion.name}.`
                            );
                            return null;
                          }
                        })}
                      </div>
                      <figcaption className={classes.championName}>
                        {champion.name}
                      </figcaption>
                    </div>
                  </figure>
                );
              })}
            </div>
            <div className={classes.btnContainer}>
              <button>&rarr;</button>
              <label htmlFor="button">See in builder</label>
            </div>
          </div>
        </section>
      ))}
    </main>
  );
};

export default TeamComps;
