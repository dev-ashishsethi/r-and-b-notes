import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/loginContext";

export function Nav() {
  const { login, setLogin, setShowSignIn } = useAuth();
  const navigate = useNavigate();

  const logOutHandler = () => {
    localStorage.removeItem("login");
    setLogin(false);
    navigate("/");
  };
  const LoginHandler = () => {
    setShowSignIn(true);
  };
  return (
    <nav className="navbar">
      <a href=".\index.html">
        <p className="nav-title">
          R<span className="nav-title-short">&</span>B
          <span className="nav-title-short">Notes</span>
        </p>
      </a>

      {/* <input
        type="text"
        className="searchbar notes-search"
        placeholder="Search for notes"
      /> */}
      {login ? (
        <button className="btn btn-primary login-btn" onClick={logOutHandler}>
          Log Out
        </button>
      ) : (
        <Link to="/signIn" className="login-btn">
          {" "}
          <button className="btn btn-primary login-btn" onClick={LoginHandler}>
            Log In
          </button>
        </Link>
      )}
    </nav>
  );
}
