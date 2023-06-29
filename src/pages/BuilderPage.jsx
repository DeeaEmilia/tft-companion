import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import comps from "../data/comps";
import Champions from "../components/Champions/Champions";

const BuilderPage = () => {
  // Getting the name parameter from the URL
  const { name } = useParams();

  // Finding the corresponding comp
  const comp = comps.find((comp) => comp.name === name);

  // Instantiate navigate
  const navigate = useNavigate();

  // If there's no comp found, we return null or a "not found" message
  if (!comp) {
    return <h1>Comp not found</h1>;
  }

  const [hoveredChampion, setHoveredChampion] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);

  // Display the comp data
  return (
    <div>
      <h1>{comp.name}</h1>
      <h2>Tier: {comp.tier}</h2>
      <img src={comp.tierImage} alt={`${comp.tier} tier`} />
      <Champions
        comp={comp}
        setHoveredChampion={setHoveredChampion}
        setHoveredItem={setHoveredItem}
        hoveredChampion={hoveredChampion}
        hoveredItem={hoveredItem}
      />
      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
};

export default BuilderPage;
