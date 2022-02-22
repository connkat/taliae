import { Link } from "react-router-dom";

import LeftAccordion from "../components/Accordions/LeftAccordion";
import RightAccordion from "../components/Accordions/RightAccordion";
import Slider from "../components/Slider";

import logo from "../images/logo-transparent.png";

import "./Home.css";

function Home() {
  return (
    <div className="Home">
      <h2> About Me:</h2>
      <h4>
        Hi! My name is Talia E! I am 9 years old and live in the Kirkendall
        neighbourhood. I have been described as patient, reliable, kind, fun,
        and responsible. I like gymnastics, dance, music and art. I love reading
        and animals and I just can't wait to be a babysitter! I have a little
        sister(5 years old) and two little cousins(4 and 6 years old) that I
        entertain and play with.
      </h4>
      <img src={logo} alt="logo-mobile" className="logo-mobile" />
      <div className="accordion-sandwich">
        <div className="left-side">
          <p className="small-text">
            I won't let your kids be on devices or screens all day!
          </p>
          <LeftAccordion />
        </div>
        <div className="center">
          <img src={logo} alt="logo-desktop" className="logo-desktop" />
        </div>
        <div className="right-side">
          <p className="small-text">
            You can contact my mom using <Link to="/contact">this form </Link>to
            book or for more information.
          </p>
          <RightAccordion />
        </div>
      </div>
      <div>
        <h2>Happy Customers:</h2>
        <Slider />
      </div>
      <div className="watermark">
        Website made and maintained by my <a href="http://connkat.com">aunt</a>.
      </div>
    </div>
  );
}

export default Home;
