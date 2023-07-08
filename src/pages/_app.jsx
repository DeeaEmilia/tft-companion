import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TraitProvider } from "../context/TraitContext.jsx";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer.jsx";

import "../styles/index.scss";

import { ChampionProvider } from "../context/ChampionContext";

// New component to handle the loading of champion data

// eslint-disable-next-line react/prop-types
function App({ Component, pageProps }) {
  return (
    <>
      <ChampionProvider>
        <DndProvider backend={HTML5Backend}>
          {/* <DndProvider backend={isMobile ? HTML5Backend : celalalt}></DndProvider> */}
          <TraitProvider>
            <Navbar />
            <Component {...pageProps} />
            <Footer />
          </TraitProvider>
        </DndProvider>
      </ChampionProvider>
    </>
  );
}

export default App;
