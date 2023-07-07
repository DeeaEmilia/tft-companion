import HexGrid from "./HexGrid";
import ChampionIcons from "./ChampionIcons";
import ActiveTraits from "../components/ActiveTraits";

const Builder = () => {
  return (
    <section className="builder-wrapper">
      <div className="builder">
        <ActiveTraits />
        <HexGrid />
      </div>
      <ChampionIcons />
    </section>
  );
};

export default Builder;
