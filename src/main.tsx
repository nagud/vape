import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { App } from "./App";
import "./index.css";
import { routerBasename, useHashRouting } from "./lib/assets";

function RootRouter() {
  if (useHashRouting) {
    return (
      <HashRouter>
        <App />
      </HashRouter>
    );
  }

  return (
    <BrowserRouter basename={routerBasename}>
      <App />
    </BrowserRouter>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RootRouter />
  </StrictMode>,
);
