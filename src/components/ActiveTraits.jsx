import { useContext } from "react";
import { TraitContext } from "../context/TraitContext";

const ActiveTraits = () => {
  const { activeTraits } = useContext(TraitContext);

  return (
    <div>
      {activeTraits.map((trait, index) => (
        <p key={index}>{`${trait.name} (${trait.count})`}</p>
      ))}
    </div>
  );
};

export default ActiveTraits;
