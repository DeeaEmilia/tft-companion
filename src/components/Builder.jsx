import HexGrid from "./HexGrid";
import ChampionIcons from "./ChampionIcons";

const Builder = () => {
  return (
    <section className="builder-wrapper">
      <div>
        <HexGrid />
      </div>
      <div>
        <ChampionIcons />
      </div>
    </section>
  );
};

export default Builder;
