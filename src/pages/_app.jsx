import { TraitProvider } from "../context/TraitContext.jsx";
import Navbar from "../components/Navbar";
import "../styles/index.scss";

// eslint-disable-next-line react/prop-types
function App({ Component, pageProps }) {
  return (
    <>
      <TraitProvider>
        <Navbar />
        <Component {...pageProps} />
      </TraitProvider>
    </>
  );
}

export default App;
