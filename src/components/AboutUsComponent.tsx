import { Link } from "react-router-dom";

const AboutUsComponent = () => {
  return (
    <>
      <h2>About Us</h2>
      <p>
        We are a research laboratory at the{" "}
        <Link to="https://engineering.purdue.edu/ME" className="linkStyle">
          School of Mechanical Engineering
        </Link>{" "}
        of{" "}
        <Link to="https://www.purdue.edu" className="linkStyle">
          Purdue University
        </Link>
        , founded in 2014 by{" "}
        <Link to="/people" className="linkStyle">
          Dr. Ilias Bilionis
        </Link>
        .
      </p>
    </>
  );
};

export default AboutUsComponent;
