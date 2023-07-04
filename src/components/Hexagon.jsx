const Hexagon = () => {
  //   const hexagon = [
  //     {
  //       name: null,
  //       traits: null,
  //       cost: null,
  //       health: null,
  //       damage: null,
  //       dps: null,
  //       armor: null,
  //       mr: null,
  //       speed: null,
  //       range: null,
  //       mana: null,
  //       skillName: null,
  //       skillDescription: null,
  //       icon: null,
  //     },
  //   ];

  return (
    <div>
      <svg
        className="hexagon-wrapper"
        width="100"
        height="100"
        viewBox="0 0 100 100"
        stroke="grey"
        fill="grey"
        xmlns="http://www.w3.org/2000/svg">
        <g>
          <polygon
            className="hexagon"
            points="2.1,73.8 2.1,26.2 43.6,2.3 85,26.2 85,73.8 43.6,97.7 	"
          />
          <path d="M43.6,4.6L83,27.3l0,45.4L43.6,95.4L4.1,72.7l0-45.4L43.6,4.6 M43.6,0L0.1,25l0,50l43.4,25L87,75l0-50L43.6,0L43.6,0z" />
        </g>
      </svg>
    </div>
  );
};

export default Hexagon;
