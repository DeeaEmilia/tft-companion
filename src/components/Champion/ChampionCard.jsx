/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import classes from "./ChampionCard.module.scss";
import traitsData from "../../data/traits";
import items from "../../data/items";
import componentsData from "../../data/components";
import costColors from "../../data/costColors";

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
      className={classes.championsWrapper}
      key={
        champion.name
          ? `${comp.name}-${champion.name}`
          : `${comp.name}-${Math.random().toString()}`
      }>
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
                <span className={classes.traitName} key={traitName}>
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
      </div>
      <div className={classes.itemHolder}>
        <Link to={`/championPage/${champion.name}`}>
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
        </Link>
        <div className={classes.itemWrapper}>
          {championComp.items.map((itemId, index) => {
            const item = items.find((item) => item.id === itemId);
            if (item) {
              return (
                <div key={itemId + index} className={classes.tooltipItemIcon}>
                  <Link to={`/itemPage/${itemId}`}>
                    <img
                      src={item.icon}
                      alt={item.name}
                      className={classes.square}
                      onMouseEnter={() =>
                        setHoveredItem(
                          `${comp.name}-${champion.name}-${itemId}`
                        )
                      }
                      onMouseLeave={() => setHoveredItem(null)}
                    />
                  </Link>
                  <div
                    className={`${classes.tooltipComponent} ${
                      hoveredItem === `${comp.name}-${champion.name}-${itemId}`
                        ? classes.visible
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
                            className={classes.componentsHolder}>
                            <img
                              src={component.icon}
                              alt={component.name}
                              className={classes.componentBorder}
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
      <figcaption className={classes.championName}>{champion.name}</figcaption>
    </figure>
  );
};

export default ChampionCard;
