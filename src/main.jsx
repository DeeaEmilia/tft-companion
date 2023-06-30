import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { HoveredProvider } from "./context/HoveredContext";
import { TraitProvider } from "./context/TraitContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <TraitProvider>
        <HoveredProvider>
          <App />
        </HoveredProvider>
      </TraitProvider>
    </BrowserRouter>
  </React.StrictMode>
);
