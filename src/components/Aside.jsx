import classes from "./Aside.module.scss";

const Aside = () => {
  return (
    <div className={classes.container}>
      <ul>
        <li>Home</li>
        <li>Profile</li>
        <li>Team Comps</li>
        <li>Database</li>
        <li>Tier List</li>
      </ul>
    </div>
  );
};

export default Aside;
