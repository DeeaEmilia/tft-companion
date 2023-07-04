import HexGrid from "./HexGrid";
import ChampionIcons from "./ChampionIcons";

const Builder = () => {
  return (
    <div className="builder-wrapper">
      <div>
        <HexGrid />
        <HexGrid />
        <HexGrid />
        <HexGrid />
      </div>
      <div>
        <ChampionIcons></ChampionIcons>
      </div>
    </div>
  );
};

export default Builder;
