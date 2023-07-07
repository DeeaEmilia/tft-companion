import { useContext } from "react";
import { TraitContext } from "../context/TraitContext";

const ActiveTraits = () => {
  const { activeTraits } = useContext(TraitContext);

  return (
    <div>
      <p>How do use:</p>
      <ul>
        <li>1. Drag champions into the hex you want them.</li>
        <li>2. Double-click to remove them</li>
      </ul>
      {activeTraits.map((trait, index) => (
        <p key={index}>{`${trait.name} (${trait.count})`}</p>
      ))}
    </div>
  );
};

export default ActiveTraits;
