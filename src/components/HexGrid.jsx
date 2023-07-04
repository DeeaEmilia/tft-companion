import Hexagon from "./Hexagon";

const HexGrid = () => {
  const numHexagons = 7;

  return (
    <div className="hexagon-row">
      {Array.from({ length: numHexagons }, (_, index) => (
        <div key={index}>
          <Hexagon />
        </div>
      ))}
    </div>
  );
};

export default HexGrid;
