import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { HoveredProvider } from "./context/HoveredContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <HoveredProvider>
        <App />
      </HoveredProvider>
    </BrowserRouter>
  </React.StrictMode>
);
