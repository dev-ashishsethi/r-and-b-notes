import "./App.css";
import logo from "./logo.png";

import { Nav } from "./Components/Nav/Nav.jsx";
import { Sidebar } from "./Components/Sidebar/Sidebar.jsx";
import { Home } from "./Pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import { SignIn } from "./Components/SignIn/SignIn";
import { LandingPage } from "./Pages/LandingPage/LandingPage";
import { useAuth } from "./Context/loginContext";
import { SignUp } from "./Components/SignUp/SignUp";
import { Archive } from "./Pages/Archive/Archive";
function App() {
  const { login } = useAuth();
  return (
    <div className="layout-container">
      {/* <> */}
      {/* <LandingPage /> */}
      {login && <Nav />}
      {login && <Sidebar />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        {login && <Route path="/home" element={<Home />} />}
        {login && <Route path="/archive" element={<Archive />} />}
      </Routes>
      {/* </> */}
    </div>
  );
}

export default App;
