import Navbar from "../components/Navbar";
import Aside from "../components/Aside";
import TeamComps from "../components/TeamComps/TeamComps";

const Homepage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <main className="mainWrapper">
        <Aside></Aside>
        <TeamComps></TeamComps>
      </main>
    </div>
  );
};

export default Homepage;
