import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend } from "react-dnd-touch-backend";
import { useState, useEffect } from "react";
import { TraitProvider } from "../context/TraitContext.jsx";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer.jsx";

import "../styles/index.scss";

import { ChampionProvider } from "../context/ChampionContext";

// New component to handle the loading of champion data

// eslint-disable-next-line react/prop-types
function App({ Component, pageProps }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent =
      typeof window.navigator === "undefined" ? "" : navigator.userAgent;
    const mobile = Boolean(
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        userAgent
      )
    );
    setIsMobile(mobile);
  }, []);

  return (
    <ChampionProvider>
      <DndProvider backend={isMobile ? TouchBackend : HTML5Backend}>
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
