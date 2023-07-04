import Hexagon from "./Hexagon";

const HexGrid = () => {
  const numHexagons = 7;
  const numRows = 4;

  const hexGrid = [];

  for (let i = 0; i < numRows; i++) {
    let row = [];
    for (let j = 0; j < numHexagons; j++) {
      const id = `${i}-${j}`;
      row.push(
        <div key={id}>
          <Hexagon id={id} />
        </div>
      );
    }
    hexGrid.push(
      <div className="hexagon-row" key={i}>
        {row}
      </div>
    );
  }

  return <div>{hexGrid}</div>;
};

export default HexGrid;
