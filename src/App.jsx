import { Routes, Route } from "react-router-dom";
import { Homepage } from "./pages";
import ChampionDetail from "./components/ChampionDetail";
import BuilderPage from "./pages/BuilderPage";
import "./styles/index.scss";

function App() {
  return (
    <Routes>
      <Route path="/champion/:name" element={<ChampionDetail />} />
      <Route path="/" element={<Homepage />} />
      <Route path="/BuilderPage/:name" element={<BuilderPage />} />
    </Routes>
  );
}

export default App;
