import { Link } from "react-router-dom";

const Aside = () => {
  return (
    <div className="aside__container">
      <ul>
        <li className="aside__link">Home</li>
        <Link to="/TeamComps">
          <li className="aside__link">Team Comps</li>
        </Link>
        <Link to="/ChampionsList">
          <li className="aside__link">Champions</li>
        </Link>
        <Link to="/ItemsList">
          <li className="aside__link">Items</li>
        </Link>
      </ul>
    </div>
  );
};

export default Aside;
