import Link from "next/link";

const Aside = () => {
  return (
    <div className="as-container">
      <ul>
        <li className="as-link">
          <Link href="/">Home</Link>
        </li>
        <li className="as-link">
          <Link href="/team-comps-page">Team Comps</Link>
        </li>
        <li className="as-link">
          <Link href="/champions-list-page">Champions</Link>
        </li>
        <li className="as-link">
          <Link href="/items-list-page">Items</Link>
        </li>
      </ul>
    </div>
  );
};

export default Aside;
