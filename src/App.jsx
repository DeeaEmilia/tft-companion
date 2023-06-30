import { Routes, Route } from "react-router-dom";
import { Homepage } from "./pages";
import TeamPage from "./pages/TeamPage";
import ChampionPage from "./pages/ChampionPage";
import ItemPage from "./pages/ItemPage";
import "./styles/index.scss";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/TeamPage/:name" element={<TeamPage />} />
      <Route path="/championPage/:name" element={<ChampionPage />} />
      <Route path="/itemPage/:itemId" element={<ItemPage />} />
    </Routes>
  );
}

export default App;
