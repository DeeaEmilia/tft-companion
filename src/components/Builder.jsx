import HexGrid from "./HexGrid";
import ChampionIcons from "./ChampionIcons";
import ActiveTraits from "../components/ActiveTraits";

const Builder = () => {
  return (
    <section className="builder-wrapper">
      <ActiveTraits />
      <HexGrid />
      <ChampionIcons />
    </section>
  );
};

export default Builder;
