import { useRouter } from "next/router";
import Image from "next/image";
import champions from "../../data/champions";

// Define the ChampionPage component
const ChampionPage = () => {
  // Getting the name parameter from the URL
  const router = useRouter();
  const { name } = router.query;

  // Find the champion with the name that matches the `name` route parameter
  // `find` will return the first match it finds in the array
  const champion = champions.find((champion) => champion.name === name);

  // If there is no matching champion (i.e., `champion` is undefined), return an error message
  if (!champion) return <p>Champion not found</p>;

  // If a champion is found, return a component displaying the champion's name and icon
  return (
    <div>
      <div className="main-wrapper">
        <div className="p-content-wrapper">
          <div className="p-title-wrapper">
            <h2>{champion.name}</h2>
            <button className="btn" onClick={() => router.back()}>
              Go back
            </button>
          </div>
          <p>Cost: {champion.cost}</p>
          <div>Traits: {champion.traits.join(", ")}</div>
          <Image
            src={champion.icon}
            alt={`${champion.name} icon`}
            width={100}
            height={75}
          />
          <p>Health: {champion.health} </p>
          <p>Damage: {champion.damage} </p>
          <p>DPS: {champion.dps} </p>
          <p>Aromor: {champion.armor}</p>
          <p>Range: {champion.range} </p>
          <p>{champion.skillName}</p>
          <div>
            {champion.skillDescription.map((desc, index) => (
              <p key={index}>{desc}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ChampionPage;
