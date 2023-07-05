import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isNavVisible, setNavVisible] = useState(false);

  const toggleNav = () => {
    setNavVisible(!isNavVisible);
  };

  return (
    <div className="navbar-wrapper">
      <button
        className="mobile-nav-toggle"
        aria-expanded={isNavVisible}
        onClick={toggleNav}>
        <svg className="hamburger" viewBox="0 0 100 100" width="30">
          <rect
            className="top line"
            width="80"
            height="10"
            x="10"
            y="25"></rect>
          <rect
            className="middle line"
            width="80"
            height="10"
            x="10"
            y="45"></rect>
          <rect
            className="bottom line"
            width="80"
            height="10"
            x="10"
            y="65"></rect>
        </svg>
        <span className="sr-only">Menu</span>
      </button>
      <nav
        id="primary-navigation"
        className={isNavVisible ? "visible" : "hidden"}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/team-comps-page">Meta Teams</Link>
          </li>
          <li>
            <Link href="/builder-page">Team Builder</Link>
          </li>
          <li>
            <Link href="/champions-list-page">Champions</Link>
          </li>
          <li>
            <Link href="/items-list-page">Items</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
