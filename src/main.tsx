import React from "react";
import ReactDOM from "react-dom/client";

import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { msalConfig } from "./config/AzureConfig";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const msalInstance = new PublicClientApplication(msalConfig);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MsalProvider instance={msalInstance}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MsalProvider>
  </React.StrictMode>
);
