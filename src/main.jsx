import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";

import { TraitProvider } from "./context/TraitContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <TraitProvider>
        <App />
      </TraitProvider>
    </BrowserRouter>
  </React.StrictMode>
);
