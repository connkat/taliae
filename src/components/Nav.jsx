import "./Nav.css";
import { Link } from "react-router-dom";
import title from "../images/title.png";
import contact from "../images/contact.png";

function Nav() {
  return (
    <div className="Nav">
      <div className="Link">
        <Link to="/">
          <img src={title} alt="title" className="title" />
        </Link>
      </div>
      <div className="Link">
        <a href="/contact">
          <img src={contact} alt="contact" className="contact" />
        </a>
      </div>
    </div>
  );
}

export default Nav;
