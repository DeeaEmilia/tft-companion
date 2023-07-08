import { useContext } from "react";
import { TraitContext } from "../context/TraitContext";

const ActiveTraits = () => {
  // Extract the "activeTraits" from TraitContext using useContext hook
  const { activeTraits } = useContext(TraitContext);

  // Return a JSX for displaying the active traits
  return (
    <div>
      <p>How do use:</p>
      <ul>
        <li>1. Drag champions into the hex you want them.</li>
        <li>2. Double-click to remove them</li>
      </ul>
      {/* Map over activeTraits array and create a <p> element for each trait */}
      {/* Display the trait's name and count */}
      {activeTraits.map((trait, index) => (
        <p key={index}>{`${trait.name} (${trait.count})`}</p>
      ))}
    </div>
  );
};

export default ActiveTraits;
