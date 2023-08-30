// import { isMobile } from "react-device-detect"; -uninstall
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend } from "react-dnd-touch-backend";
import { TraitProvider } from "../context/TraitContext.jsx";
import { ChampionProvider } from "../context/ChampionContext";
import { isMobile } from "is-mobile";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer.jsx";

import "../styles/index.scss";

// eslint-disable-next-line react/prop-types
function App({ Component, pageProps }) {
  return (
    <ChampionProvider>
      <DndProvider backend={isMobile() ? TouchBackend : HTML5Backend}>
        <TraitProvider>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </TraitProvider>
      </DndProvider>
    </ChampionProvider>
  );
}

export default App;
