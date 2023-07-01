/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import traitsData from "../data/traits";
import items from "../data/items";
import componentsData from "../data/components";
import costColors from "../data/costColors";

const ChampionCard = ({
  champion,
  setHoveredChampion,
  setHoveredItem,
  hoveredChampion,
  hoveredItem,
  comp,
  championComp,
}) => {
  return (
    <figure
      className="cc-champs-wrapper flex-center"
      key={
        champion.name
          ? `${comp.name}-${champion.name}`
          : `${comp.name}-${Math.random().toString()}`
      }>
      <div
        className={`cc-tooltip-champ ${
          hoveredChampion === `${comp.name}-${champion.name}` ? "visible" : ""
        }`}>
        <h3>{champion.name}</h3>
        <img
          className="cc-tooltip-champ-icon"
          src={champion.icon}
          alt={`${champion.name} icon`}
        />

        <div className="cc-details">
          <div>
            {champion.traits.map((traitName) => {
              const trait = traitsData.find(
                (traitItem) => traitItem.name === traitName
              );
              return (
                <span className="cc-trait-name flex-display" key={traitName}>
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
          <div className="cc-cost-wrapper flex-display">
            <img
              src="/assets/icon-gold.svg"
              alt="gold icon"
              className="cc-gold-icon"
            />
            {champion.cost}
          </div>
        </div>
      </div>
      <div className="cc-item-holder flex-display">
        <Link to={`/championPage/${champion.name}`}>
          <img
            src={champion.icon}
            alt={champion.name}
            className="cc-champion-icon"
            style={{ borderColor: costColors[champion.cost] }}
            onMouseEnter={() =>
              setHoveredChampion(`${comp.name}-${champion.name}`)
            }
            onMouseLeave={() => setHoveredChampion(null)}
          />
        </Link>
        <div className="cc-item-wrapper flex-display">
          {championComp.items.map((itemId, index) => {
            const item = items.find((item) => item.id === itemId);
            if (item) {
              return (
                <div key={itemId + index}>
                  <Link to={`/itemPage/${itemId}`}>
                    <img
                      src={item.icon}
                      alt={item.name}
                      className="cc-square"
                      onMouseEnter={() =>
                        setHoveredItem(
                          `${comp.name}-${champion.name}-${itemId}`
                        )
                      }
                      onMouseLeave={() => setHoveredItem(null)}
                    />
                  </Link>
                  <div
                    className={`cc-tooltip-component ${
                      hoveredItem === `${comp.name}-${champion.name}-${itemId}`
                        ? "visible"
                        : ""
                    }`}>
                    <h4>{item.name}</h4>
                    <p>
                      {" "}
                      <strong> Description:</strong> {item.description}
                    </p>
                    {item.components.map((componentId, index) => {
                      const component = componentsData.find(
                        (comp) => comp.id === componentId
                      );
                      if (component) {
                        return (
                          <div
                            key={component.id + "-" + index}
                            className="cc-components-holder flex-display">
                            <img
                              src={component.icon}
                              alt={component.name}
                              className="cc-border"
                            />
                            <h5>{component.name}</h5>
                            <p>{component.description}</p>
                          </div>
                        );
                      }
                      return null;
                    })}
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
      <figcaption className="cc-champ-name">{champion.name}</figcaption>
    </figure>
  );
};

export default ChampionCard;
