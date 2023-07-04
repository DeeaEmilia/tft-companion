// Importing necessary items from local files and styling
import Image from "next/image";
import items from "../data/items";
import components from "../data/components";

// Defining the ItemsList functional component
const ItemsList = () => (
  <section className="il-container padding">
    <header className="il-header">
      <h3>Item</h3>
      <h3>Description</h3>
      <h3>Recipe</h3>
    </header>

    {/* Using map to iterate over all items */}
    {items.map((item) => (
      // Each item is represented as a div
      <div key={item.id} className="il-item-container">
        {/* Display item name and icon */}
        <div className="il-item flex-wrapper">
          <Image
            src={item.icon}
            alt={`${item.name} icon`}
            className="il-item-img"
            width={50}
            height={50}
          />
          <h4>{item.name}</h4>
        </div>

        {/* Display item description */}
        <div className="itemListDescription">{item.description}</div>

        {/* Display components used to make the item */}
        <div className="il-components-container">
          {/* Again using map to iterate over all components */}
          {item.components.map((componentId, index) => {
            // Find the details of each component using the component ID
            const component = components.find(
              (component) => component.id === componentId
            );

            // If the component exists, we return a div displaying the component details
            return component ? (
              <div
                key={componentId + index}
                className="il-component flex-wrapper">
                {/* Display component icon */}
                <Image
                  src={component.icon}
                  alt={`${component.name} icon`}
                  className="il-component-img"
                  width={50}
                  height={50}
                />
                {/* Display component name and description */}
                <div className="il-component-details">
                  <p>{component.name}</p>
                  <span>{component.description}</span>
                </div>
              </div>
            ) : null; // If no component is found, return null (no component displayed)
          })}
        </div>
      </div>
    ))}
  </section>
);

export default ItemsList;
