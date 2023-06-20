import Navbar from "../components/Navbar";
import Aside from "../components/Aside";
import TeamComps from "../components/TeamComps/TeamComps";
import ItemsList from "../components/ItemList";
import ChampionsList from "../components/ChampionsList";

const Homepage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="container">
        <Aside></Aside>
        <TeamComps></TeamComps>
        <ChampionsList></ChampionsList>
        <ItemsList></ItemsList>
      </div>
    </div>
  );
};

export default Homepage;
