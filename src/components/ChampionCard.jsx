/* eslint-disable react/prop-types */
import Link from "next/link";
import traitsData from "../data/traits";
import items from "../data/items";
import componentsData from "../data/components";
import costColors from "../data/costColors";
import Image from "next/image";

const ChampionCard = ({
  champion, // Data of a particular champion
  setHoveredChampion, // Function to set a champion as hovered
  setHoveredItem, // Function to set an item as hovered
  hoveredChampion, // The currently hovered champion
  hoveredItem, // The currently hovered item
  comp, // The team comps
  championComp, // a specific comp that includes the champion in question
}) => {
  return (
    <figure
      className="champs-wrapper flex-center"
      key={
        // If the champion inside the comp has a name then the key will be compName-champName if not it will be compName-randomNr.
        champion.name
          ? `${comp.name}-${champion.name}`
          : `${comp.name}-${Math.random().toString()}`
      }>
      {/* Tooltip for the champion. The tooltip will become visible if the hoveredChampion equals the current champion defined above*/}
      <div
        className={`tooltip-champ ${
          hoveredChampion === `${comp.name}-${champion.name}` ? "visible" : ""
        }`}>
        {/* Champion name will be extracted from the DB */}
        <h3>{champion.name}</h3>
        <Image
          className="tooltip-champ-icon"
          src={champion.icon}
          alt={`${champion.name} icon`}
          width={170}
          height={170}
        />
        {/* The tooltip contains information about the champion, including its
        name, image, traits, and cost. The traits are fetched from the
        traitsData and are displayed with their respective emblem images. */}
        <div className="champion-details">
          {champion.traits.map((traitName) => {
            const trait = traitsData.find(
              (traitItem) => traitItem.name === traitName
            );
            return (
              <figure className="trait-name" key={traitName}>
                <Image
                  src={trait.emblem}
                  alt={traitName}
                  style={{ height: "1em" }}
                  width={50}
                  height={50}
                />{" "}
                <figcaption>{traitName}</figcaption>
              </figure>
            );
          })}
        </div>
        <figure className="cost-wrapper">
          <Image
            src="/assets/icon-gold.svg"
            alt="gold icon"
            className="gold-icon"
            width={50}
            height={50}
          />
          <figcaption>{champion.cost}</figcaption>
        </figure>
      </div>
      <div className="item-holder flex-display">
        <Link href={`/champion-page/${champion.name}`}>
          <Image
            src={champion.icon}
            alt={champion.name}
            className="champion-icon"
            width={100}
            height={75}
            style={{ borderColor: costColors[champion.cost] }}
            onMouseEnter={() =>
              setHoveredChampion(`${comp.name}-${champion.name}`)
            }
            onMouseLeave={() => setHoveredChampion(null)}
          />
        </Link>
        <div className="item-wrapper flex-display">
          {championComp.items.map((itemId, index) => {
            const item = items.find((item) => item.id === itemId);
            if (item) {
              return (
                <div key={itemId + index}>
                  <Link href={`/item-page/${itemId}`}>
                    <Image
                      src={item.icon}
                      alt={item.name}
                      className="item-icon"
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
                    className={`tooltip-component ${
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
                            className="components-wrapper flex-display">
                            <Image
                              src={component.icon}
                              alt={component.name}
                              className="component-image"
                              width={64}
                              height={64}
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
      <figcaption className="champ-name">{champion.name}</figcaption>
    </figure>
  );
};

export default ChampionCard;
