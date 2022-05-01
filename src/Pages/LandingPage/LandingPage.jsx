import { Link } from "react-router-dom";
import landingImage from "../../Assets/notes.svg";
import { useAuth } from "../../Context/loginContext";
import "./LandingPage.css";
export function LandingPage() {
  const { login, checkLogin } = useAuth();
  //   checkLogin();
  return (
    <>
      <div className="on-left">
        <p className="nav-title">
          R<span className="nav-title-short">&</span>B
          <span className="nav-title-short">Notes</span>
        </p>

        <section className="landing-text">
          <p className="nav-title-short">Meet your modern Note Taking App.</p>
          <p className="nav-title-short">
            Manage your daily tasks and workflow in a modern way and boost your
            efficiency without any efforts.
          </p>
        </section>
        {login ? (
          <Link to="/Home">
            <button className="btn btn-primary login-btn-landing">
              Take Notes
            </button>
          </Link>
        ) : (
          <Link to="/signIn">
            <button className="btn btn-primary login-btn-landing">
              Log In
            </button>
          </Link>
        )}
      </div>

      <img src={landingImage} alt="" className="landing-image" />
    </>
  );
}
