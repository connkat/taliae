import "./Nav.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="Nav">
      <div className="Link">
        <Link to="/">
          <p>Home</p>
        </Link>
      </div>
      <div className="Link">
        <a href="/contact">
          <p>Contact</p>
        </a>
      </div>
    </div>
  );
}

export default Nav;
