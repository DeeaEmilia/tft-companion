/* eslint-disable react/prop-types */
import Link from "next/link";
import traitsData from "../data/traits";
import items from "../data/items";
import componentsData from "../data/components";
import costColors from "../data/costColors";
import Image from "next/image";

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
        <Image
          className="cc-tooltip-champ-icon"
          src={champion.icon}
          alt={`${champion.name} icon`}
          width={50}
          height={50}
        />

        <div className="cc-details">
          <div>
            {champion.traits.map((traitName) => {
              const trait = traitsData.find(
                (traitItem) => traitItem.name === traitName
              );
              return (
                <span className="cc-trait-name flex-display" key={traitName}>
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
          <div className="cc-cost-wrapper flex-display">
            <Image
              src="/assets/icon-gold.svg"
              alt="gold icon"
              className="cc-gold-icon"
              width={50}
              height={50}
            />
            {champion.cost}
          </div>
        </div>
      </div>
      <div className="cc-item-holder flex-display">
        <Link href={`/champion-page/${champion.name}`}>
          <Image
            src={champion.icon}
            alt={champion.name}
            className="cc-champion-icon"
            width={100}
            height={75}
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
                  <Link href={`/item-page/${itemId}`}>
                    <Image
                      src={item.icon}
                      alt={item.name}
                      className="cc-square"
                      width={50}
                      height={50}
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
                            <Image
                              src={component.icon}
                              alt={component.name}
                              className="cc-border"
                              width={50}
                              height={50}
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
