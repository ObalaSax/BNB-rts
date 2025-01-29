import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { AirApi } from "./Features/Slices/DataApi.ts";
import { Provider } from "react-redux";
import { airStore } from "./Features/AirMainStore.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApiProvider api={AirApi}>
      <Provider store={airStore}>
        <App />
      </Provider>
    </ApiProvider>
  </StrictMode>,
);
