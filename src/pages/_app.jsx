import { TraitProvider } from "../context/TraitContext.jsx";
import Navbar from "../components/Navbar";
import Aside from "../components/Aside";
import "../styles/index.scss";

// eslint-disable-next-line react/prop-types
function App({ Component, pageProps }) {
  return (
    <>
      <TraitProvider>
        <Navbar />
        <Aside />
        <Component {...pageProps} />
      </TraitProvider>
    </>
  );
}

export default App;
