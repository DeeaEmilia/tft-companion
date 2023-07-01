import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import TeamPage from "./pages/TeamPage";
import ChampionPage from "./pages/ChampionPage";
import ItemPage from "./pages/ItemPage";
import TeamComps from "./pages/TeamCompsPage";
import ItemsList from "./pages/ItemsListPage";
import ChampionsList from "./pages/ChampionsListPage";

import "./styles/index.scss";

function App() {
  return (
    <Routes>
      <Route index element={<Homepage />} />
      <Route path="TeamPage/:name" element={<TeamPage />} />
      <Route path="ChampionPage/:name" element={<ChampionPage />} />
      <Route path="ItemPage/:itemId" element={<ItemPage />} />
      <Route path="TeamComps" element={<TeamComps />} />
      <Route path="ChampionsList" element={<ChampionsList />} />
      <Route path="ItemsList" element={<ItemsList />} />
    </Routes>
  );
}

export default App;
