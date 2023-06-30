import Navbar from "../components/Navbar";
import Aside from "../components/Aside";
import TeamComps from "../components/TeamComps/TeamComps";
import ItemsList from "../components/ItemList";

const Homepage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <main className="mainWrapper">
        <Aside></Aside>
        <TeamComps></TeamComps>
        <ItemsList></ItemsList>
      </main>
    </div>
  );
};

export default Homepage;
