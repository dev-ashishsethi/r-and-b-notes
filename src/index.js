import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter, BrowserRouter as Router } from "react-router-dom";
import { LoginProvider } from "./Context/loginContext.jsx";
// import { SignIn } from "./Components/SignIn/SignIn";
// import { LandingPage } from "./Pages/LandingPage/LandingPage";
import { NoteProvider } from "./Context/noteContext";
import { FilterProvider } from "./Context/filterContext";
// Call make Server
makeServer();
// const root = ReactDOM.createRoot(document.getElementById("root"));
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

// ReactDOM.render(
//   ,
//   document.getElementById("root")
// );
