import { Link } from "react-router-dom";
import champions from "../data/champions";

const ChampionsList = () => (
  <div>
    {champions.map((champion) => (
      <div key={champion.name}>
        <h2>{champion.name}</h2>
        <Link to={`/champion/${champion.name}`}>
          <img src={champion.icon} alt={`${champion.name} icon`} />
          <p>Classes: {champion.traits.join(", ")}</p>
          <p>
            Cost:{" "}
            <span style={{ color: champion.costColor }}>{champion.cost}</span>
          </p>
          <p>Skill: {champion.skillDescription}</p>
        </Link>
      </div>
    ))}
  </div>
);

export default ChampionsList;