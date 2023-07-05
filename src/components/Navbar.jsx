import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar padding">
        <p>Logo Placeholder</p>
        <ul>
          <li>
            <Link href="/" className="link">
              Home
            </Link>
          </li>
          <li>
            <Link href="/team-comps-page" className="link">
              Team Comps
            </Link>
          </li>
          <li>
            <Link href="/builder-page" className="link">
              Team Builder
            </Link>
          </li>
          <li>
            <Link href="/champions-list-page" className="link">
              Champions
            </Link>
          </li>
          <li>
            <Link href="/items-list-page" className="link">
              Items
            </Link>
          </li>
        </ul>
        <p>Profile</p>
      </nav>
    </div>
  );
};

export default Navbar;
