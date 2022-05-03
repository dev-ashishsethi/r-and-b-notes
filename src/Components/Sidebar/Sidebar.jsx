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
        <Link to="/label">
          <li className="sidebar-items">
            <All.IcBaselineLabel /> Labels
          </li>
        </Link>
        <Link to="/archive">
          <li className="sidebar-items">
            <All.BiArchiveFill /> Archive
          </li>
        </Link>
        <Link to="/trash">
          <li className="sidebar-items">
            <All.ClarityTrashSolid /> Trash
          </li>
        </Link>
      </ul>
    </section>
  );
}
