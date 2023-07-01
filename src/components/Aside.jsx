import { Link } from "react-router-dom";

const Aside = () => {
  return (
    <div className="as-container">
      <ul>
        <li className="as-link">Home</li>
        <Link to="/TeamComps">
          <li className="as-link">Team Comps</li>
        </Link>
        <Link to="/ChampionsList">
          <li className="as-link">Champions</li>
        </Link>
        <Link to="/ItemsList">
          <li className="as-link">Items</li>
        </Link>
      </ul>
    </div>
  );
};

export default Aside;
