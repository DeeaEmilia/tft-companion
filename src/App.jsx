import { Routes, Route } from "react-router-dom";
import { Homepage } from "./pages";
import ChampionDetail from "./components/ChampionDetail";
import TeamPage from "./pages/TeamPage";
import "./styles/index.scss";

function App() {
  return (
    <Routes>
      <Route path="/champion/:name" element={<ChampionDetail />} />
      <Route path="/" element={<Homepage />} />
      <Route path="/TeamPage/:name" element={<TeamPage />} />
    </Routes>
  );
}

export default App;
