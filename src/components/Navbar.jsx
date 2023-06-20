import classes from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <div>
      <nav className={classes.navbar}>
        <ul>
          <li>Profile</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
