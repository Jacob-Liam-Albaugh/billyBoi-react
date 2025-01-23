import { Link } from "react-router-dom";
import "../App.css";

const TeachingPage = () => {
  return (
    <>
      <h2>Teaching</h2>
      <p>
        Bilionis loves teaching scientific machine learning, probabilistic
        thinking, and uncertainty quantification to engineers. Some examples are
        these:
      </p>
      <ul>
        <li>
          <Link
            className="linkStyle"
            to="https://github.com/PredictiveScienceLab/advanced-scientific-machine-learning"
          >
            ME 697 - Advanced Scientific Machine Learning
          </Link>{" "}
          is offered on-campus during Spring 2024. You can find the online
          textbook{" "}
          <Link
            className="linkStyle"
            to="https://predictivesciencelab.github.io/advanced-scientific-machine-learning/intro.html"
          >
            here
          </Link>
          . But it is a work in progress.
        </li>
        <li>
          <Link
            className="linkStyle"
            to="https://github.com/PredictiveScienceLab/data-analytics-se"
          >
            ME 539 - Introduction to Scientific Machine Learning
          </Link>{" "}
          is being offered during Spring 2024 both online. You can find the
          online textbook
          <Link
            className="linkStyle"
            to="https://predictivesciencelab.github.io/data-analytics-se/index.html"
          >
            here here
          </Link>
          .
        </li>
        <li>
          <Link
            className="linkStyle"
            to="https://github.com/PurdueMechanicalEngineering/me-297-intro-to-data-science"
          >
            ME 297 - Introduction to Data Science for Mechanical Engineers
          </Link>
          . This was offered for the last time during Spring 2023. You can find
          the online textbook{" "}
          <Link
            className="linkStyle"
            to="https://purduemechanicalengineering.github.io/me-297-intro-to-data-science/index.html"
          >
            here
          </Link>
          .
        </li>
        <li>
          <Link
            className="linkStyle"
            to="https://github.com/PredictiveScienceLab/uq-course"
          >
            ME 597 - Introduction to Uncertainty Quantification
          </Link>
          . Bilionis taught this for the last time in Spring 2020. About one
          third of the topics taught there made it into ME 539. However, this
          course contains some classical uncertainty quantification lectures
          that Bilionis could not fit in the new course. You an find the video
          lectures{" "}
          <Link className="linkStyle" to="https://nanohub.org/resources/27789">
            here
          </Link>
          .
        </li>
        <li>
          <Link className="linkStyle" to="https://youtu.be/o9JaZGWekWQ">
            A hands-on introduction to physics-informed machine learning
          </Link>
          . This is a short lecture on the topic. You can find the Jupyter
          notebook{" "}
          <Link
            className="linkStyle"
            to="https://nanohub.org/tools/handsonpinns"
          >
            here
          </Link>
          .
        </li>
      </ul>
      <p />
    </>
  );
};

export default TeachingPage;
