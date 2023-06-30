import classes from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <div>
      <nav className={classes.navbar}>
        <ul>
          <li>Tft Companion</li>
          <li>Profile</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
