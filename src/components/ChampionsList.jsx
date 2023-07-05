import Link from "next/link";
import Image from "next/image";
import champions from "../data/champions";

const ChampionsList = () => (
  <section>
    {champions.map((champion) => (
      <div key={champion.name}>
        <h3>{champion.name}</h3>
        <Link href={`/champion-page/${champion.name}`}>
          <Image
            src={champion.icon}
            alt={`${champion.name} icon`}
            width={75}
            height={75}
          />
          <p>Classes: {champion.traits.join(", ")}</p>
          <p>
            Cost:{" "}
            <span style={{ color: champion.costColor }}>{champion.cost}</span>
          </p>
          <p>Skill: {champion.skillDescription}</p>
        </Link>
      </div>
    ))}
  </section>
);

export default ChampionsList;
