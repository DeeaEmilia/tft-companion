// Import the useParams hook from react-router-dom, which allows us to access route parameters
import { useParams, useNavigate } from "react-router-dom";

// Import the champions data
import champions from "../data/champions";

import classes from "./ChampionPage.module.scss";

// Define the ChampionPage component
const ChampionPage = () => {
  // Use the useParams hook to get the `name` parameter from the route
  const { name } = useParams();

  // Instantiate navigate
  const navigate = useNavigate();

  // Find the champion with the name that matches the `name` route parameter
  // `find` will return the first match it finds in the array
  const champion = champions.find((champion) => champion.name === name);

  // If there is no matching champion (i.e., `champion` is undefined), return an error message
  if (!champion) return <p>Champion not found</p>;

  // If a champion is found, return a component displaying the champion's name and icon
  return (
    <div className={classes.mainWrapper}>
      <h2>{champion.name}</h2>
      <button className={classes.btn} onClick={() => navigate(-1)}>
        Go back
      </button>
      <p>Cost: {champion.cost}</p>
      <div>Traits: {champion.traits.join(", ")}</div>
      <img src={champion.icon} alt={`${champion.name} icon`} />
      <p> Health: {champion.health} </p>
      <p> Damage: {champion.damage} </p>
      <p> DPS: {champion.dps} </p>
      <p> Aromor: {champion.armor}</p>
      <p>Range: {champion.range} </p>
      <p>Skill name: {champion.skillName}</p>
      <div>
        Skill Description:
        {champion.skillDescription.map((desc, index) => (
          <p key={index}>{desc}</p>
        ))}
      </div>
    </div>
  );
};
export default ChampionPage;
