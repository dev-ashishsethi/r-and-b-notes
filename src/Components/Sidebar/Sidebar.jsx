import { Link } from "react-router-dom";
import * as All from "../../icons/icons";
export function Sidebar() {
  return (
    <section className="sidebar">
      <ul className="sidebar-container">
        <Link to="/home">
          <li className="sidebar-items">
            <All.IonHome /> Home
          </li>
        </Link>
        <a href="./Labels/Labels.html">
          <li className="sidebar-items">
            <All.IcBaselineLabel /> Labels
          </li>
        </a>
        <Link to="/archive">
          <li className="sidebar-items">
            <All.BiArchiveFill /> Archive
          </li>
        </Link>
        <a href="./Trash/Trash.html">
          <li className="sidebar-items">
            <All.ClarityTrashSolid /> Trash
          </li>
        </a>
        <a href="">
          <li className="sidebar-items">
            <All.IonPersonSharp /> Profile
          </li>
        </a>
      </ul>
    </section>
  );
}
