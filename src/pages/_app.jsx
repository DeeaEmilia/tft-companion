import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TraitProvider } from "../context/TraitContext.jsx";
import Navbar from "../components/Navbar";

import "../styles/index.scss";

// eslint-disable-next-line react/prop-types
function App({ Component, pageProps }) {
  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <TraitProvider>
          <Navbar />
          <Component {...pageProps} />
        </TraitProvider>
      </DndProvider>
    </>
  );
}

export default App;
