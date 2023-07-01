import Navbar from "../components/Navbar";
import Aside from "../components/Aside";
import ChampionsList from "../components/ChampionsList";

const ChampionsListPage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <main className="mainWrapper">
        <Aside></Aside>
        <ChampionsList></ChampionsList>
      </main>
    </div>
  );
};

export default ChampionsListPage;
