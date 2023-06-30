import classes from "./Aside.module.scss";

const Aside = () => {
  return (
    <div className={classes.container}>
      <ul>
        <li>Home</li>
        <li>Team Comps</li>
        <li>Champions</li>
        <li>Items</li>
      </ul>
    </div>
  );
};

export default Aside;
