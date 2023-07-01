import { Link } from "react-router-dom";
import classes from "./Aside.module.scss";

const Aside = () => {
  return (
    <div className={classes.container}>
      <ul>
        <li>Home</li>
        <Link to="/TeamComps">
          <li>Team Comps</li>
        </Link>
        <Link to="/ChampionsList">
          <li>Champions</li>
        </Link>
        <Link to="/ItemList">
          <li>Items</li>
        </Link>
      </ul>
    </div>
  );
};

export default Aside;
