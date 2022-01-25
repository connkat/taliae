import { Link } from "react-router-dom";

import "./Home.css";

function Home() {
  return (
    <div className="Home">
      <header className="Home-header">Talia &amp; Tots!</header>
      <h2> About Me</h2>
      <h4>
        Hi! My name is Talia E! I am 9 years old and live in the Kirkendall
        neighbourhood. I have been described as patient, reliable, kind, fun,
        and responsible. I like gymnastics, dance, music and art. I love reading
        and animals and I just can't wait to be a babysitter! I have a little
        sister(5 years old) and two little cousins(4 and 6 years old) that I
        entertain and play with.
      </h4>
      <ul>
        Services Offered:
        <li>
          playing indoors and in your backyard while you work or take a break
        </li>
        <li>making snacks</li>
        <li>helping kids tidy up play space</li>
        <li>crafts</li>
        <li>reading books</li>
      </ul>
      I won't let your kids be on devices or screens all day!
      <ul>
        Because of my age, I don't:
        <li>cook with a stove </li>
        <li>take kids to the park without an adult</li>
        <li>stay home without an adult </li>
        <li>give kids baths </li>
      </ul>
      <ul>
        Availability:
        <li>weekend: Saturday afternoon, Sunday all day </li>
        <li>weekdays: Monday and Friday after school </li>
      </ul>
      <ul>
        Rates:
        <li>$5/hour for 1 kid </li>
        <li>$7/hour for 2 kids </li>
        <li>$9/hour for 3 kids</li>
      </ul>
      <p>
        You can contact my mom using <Link to="/contact">this form </Link>to
        book or for more information.
      </p>
    </div>
  );
}

export default Home;
