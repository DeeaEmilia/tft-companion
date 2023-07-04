import HexGrid from "./HexGrid";
import ChampionIcons from "./ChampionIcons";

const Builder = () => {
  return (
    <div className="builder-wrapper">
      <div>
        <HexGrid />
      </div>
      <div>
        <ChampionIcons />
      </div>
    </div>
  );
};

export default Builder;
