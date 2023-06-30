import { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { HoveredContext } from "../context/HoveredContext";
import comps from "../data/comps";
import Champions from "../components/Champions/Champions";
import classes from "./TeamPage.module.scss";

const TeamPage = () => {
  // Getting the name parameter from the URL
  const { name } = useParams();

  // Finding the corresponding comp
  const comp = comps.find((comp) => comp.name === name);

  // Instantiate navigate
  const navigate = useNavigate();

  // Get the state and setter from context
  const { hoveredChampion, setHoveredChampion, hoveredItem, setHoveredItem } =
    useContext(HoveredContext);

  // If there's no comp found, we return null or a "not found" message
  if (!comp) {
    return <h1>Comp not found</h1>;
  }

  // Display the comp data
  return (
    <div className={classes.container}>
      <h1>{comp.name}</h1>
      <img
        src={comp.tierImage}
        className={classes.tierImage}
        alt={`${comp.tier} tier`}
      />
      <div className={classes.championsWrapper}>
        <Champions
          comp={comp}
          setHoveredChampion={setHoveredChampion}
          setHoveredItem={setHoveredItem}
          hoveredChampion={hoveredChampion}
          hoveredItem={hoveredItem}
        />
      </div>
      <button className={classes.btn} onClick={() => navigate(-1)}>
        Go back
      </button>
    </div>
  );
};

export default TeamPage;
