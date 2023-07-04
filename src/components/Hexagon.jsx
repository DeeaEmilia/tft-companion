import { useDrop } from "react-dnd";
import { useState } from "react";

const Hexagon = () => {
  const [backgroundImage, setBackgroundImage] = useState(null);

  const [, drop] = useDrop(() => ({
    accept: "champion",
    drop: (item) => setBackgroundImage(item.icon),
  }));

  return (
    <div className="hexagon-border">
      <div
        ref={drop}
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "contain",
          width: "100%",
          height: "100%",
          clipPath:
            "polygon(50% 0, 100% 23%, 100% 74%, 50% 100%, 0 75%, 0 24%)",
          boxSizing: "border-box",
        }}>
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          fill="transparent"
          xmlns="http://www.w3.org/2000/svg">
          <g>
            <polygon
              className="hexagon"
              points="2.1,73.8 2.1,26.2 43.6,2.3 85,26.2 85,73.8 43.6,97.7"
            />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Hexagon;
