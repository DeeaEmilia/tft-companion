// Importing necessary items from local files and styling
import items from "../data/items";
import components from "../data/components";
import classes from "./ItemList.module.scss";

// Defining the ItemsList functional component
const ItemsList = () => (
  // Top level section for the entire component
  <section className={classes.container}>
    {/* Header Section */}
    <header className={classes.header}>
      {/* These are the column titles for each of the item properties */}
      <h3>Item</h3>
      <h3>Description</h3>
      <h3>Recipe</h3>
    </header>

    {/* Using map to iterate over all items */}
    {items.map((item) => (
      // Each item is represented as a div
      <div key={item.id} className={classes.itemContainer}>
        {/* Display item name and icon */}
        <div className={classes.item}>
          <img
            src={item.icon}
            alt={`${item.name} icon`}
            className={classes.itemImg}
          />
          <h4>{item.name}</h4>
        </div>

        {/* Display item description */}
        <div className={classes.itemDescription}>{item.description}</div>

        {/* Display components used to make the item */}
        <div className={classes.components}>
          {/* Again using map to iterate over all components */}
          {item.components.map((componentId, index) => {
            // Find the details of each component using the component ID
            const component = components.find(
              (component) => component.id === componentId
            );

            // If the component exists, we return a div displaying the component details
            return component ? (
              <div key={componentId + index} className={classes.component}>
                {/* Display component icon */}
                <img
                  src={component.icon}
                  alt={`${component.name} icon`}
                  className={classes.componentImg}
                />
                {/* Display component name and description */}
                <div className={classes.componentDetails}>
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

// Exporting the component so it can be used elsewhere
export default ItemsList;
