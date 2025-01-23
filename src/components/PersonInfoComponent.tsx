import { Link } from "react-router-dom";
import { Person } from "../types";

const PersonInfoComponent = ({ person }: { person: Person }) => {
  return (
    <div>
      <h3>{person.name}</h3>
      {person.position && <p>{person.position}</p>}
      {person.university && <p>{person.university}</p>}
      {person.email && (
        <p>
          <Link
            to={`mailto:${person.email}`}
            target="_blank"
            className="linkStyle"
          >
            {person.email}
          </Link>
        </p>
      )}
      {person.googleScholar && (
        <p>
          <Link to={person.googleScholar} target="_blank" className="linkStyle">
            Google Scholar
          </Link>
        </p>
      )}
      {person.researchGate && (
        <p>
          <Link to={person.researchGate} target="_blank" className="linkStyle">
            ResearchGate
          </Link>
        </p>
      )}
      {person.cv && (
        <p>
          <Link
            to={`/src/assets/docs/${person.cv}`}
            target="_blank"
            className="linkStyle"
          >
            CV
          </Link>
        </p>
      )}
      {person.shortBio && (
        <p>
          <Link
            to={`/src/assets/docs/${person.shortBio}`}
            target="_blank"
            className="linkStyle"
          >
            Short bio
          </Link>
        </p>
      )}
      {person.personalGithub && (
        <p>
          <Link
            to={person.personalGithub}
            target="_blank"
            className="linkStyle"
          >
            Personal GitHub profile
          </Link>
        </p>
      )}
      {person.labGithub && (
        <p>
          <Link to={person.labGithub} target="_blank" className="linkStyle">
            Lab GitHub profile
          </Link>
        </p>
      )}
      {person.linkedin && (
        <p>
          <Link to={person.linkedin} target="_blank" className="linkStyle">
            LinkedIn profile
          </Link>
        </p>
      )}
      {person.researchAreas && (
        <div>
          <h4>Research areas:</h4>
          <ul>
            {person.researchAreas.map((area) => (
              <li>{area}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PersonInfoComponent;
