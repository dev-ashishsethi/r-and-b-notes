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
import { Delete } from "./Pages/Delete/Delete";
import { Label } from "./Pages/Label/Label";
import { ToastContainer } from "react-toastify";
function App() {
  const { login } = useAuth();
  return (
    <>
      <ToastContainer />

      <div className="layout-container">
        
        {login && <Nav />}
        {login && <Sidebar />}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
          {login && <Route path="/home" element={<Home />} />}
          {login && <Route path="/archive" element={<Archive />} />}
          {login && <Route path="/trash" element={<Delete />} />}
          {login && <Route path="/label" element={<Label />} />}
        </Routes>
        
      </div>
    </>
  );
}

export default App;
