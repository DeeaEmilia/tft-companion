import Aside from "../components/Aside";
import ChampionsList from "../components/ChampionsList";

const ChampionsListPage = () => {
  return (
    <div>
      <main className="main-wrapper">
        <Aside></Aside>
        <ChampionsList></ChampionsList>
      </main>
    </div>
  );
};

export default ChampionsListPage;
