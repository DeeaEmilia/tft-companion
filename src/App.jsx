import { Routes, Route } from 'react-router-dom';
import { Homepage } from './pages';
import ChampionDetail from './components/ChampionDetail'; // The new component to display a single champion
import './styles/index.scss';

function App() {
  return (
    <Routes>
      <Route path="/champion/:name" element={<ChampionDetail />} />
      <Route path="/" element={<Homepage />} />
    </Routes>
  );
}

export default App;
