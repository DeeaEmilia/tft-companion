import { useParams } from "react-router-dom";
import champions from "../data/champions";

const ChampionDetail = () => {
  const { name } = useParams();
  const champion = champions.find((champion) => champion.name === name);

  if (!champion) return <p>Champion not found</p>;

  return (
    <div>
      <h2>{champion.name}</h2>
      <img src={champion.icon} alt={`${champion.name} icon`} />
      {/* ... */}
    </div>
  );
};

export default ChampionDetail;
