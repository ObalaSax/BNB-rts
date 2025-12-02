import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { bnbApi } from "./Redux/Main/bnbApi.ts";
import { Provider } from "react-redux";
import { bnbStore } from "./Redux/Main/bnbStore.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApiProvider api={bnbApi}>
      <Provider store={bnbStore}>
        <App />
      </Provider>
    </ApiProvider>
  </StrictMode>,
);
