import Image from "next/image";
import champions from "../data/champions";

const ChampionsList = () => (
  <div className="builder-icons">
    {champions.map((champion) => (
      <div key={champion.name}>
        <Image
          src={champion.icon}
          alt={`${champion.name} icon`}
          width={70}
          height={70}
        />
      </div>
    ))}
  </div>
);

export default ChampionsList;
