import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter, BrowserRouter as Router } from "react-router-dom";
import { LoginProvider } from "./Context/loginContext.jsx";

import { NoteProvider } from "./Context/noteContext";
import { FilterProvider } from "./Context/filterContext";

makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <LoginProvider>
        <FilterProvider>
          <NoteProvider>
            <App />
          </NoteProvider>
        </FilterProvider>
      </LoginProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
