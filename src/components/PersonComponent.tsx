import { Link } from "react-router-dom";
import "../App.css";
import type { Person } from "../types";
import ImageComponent from "./ImageComponent";
import PersonInfoComponent from "./PersonInfoComponent";

const PersonComponent = ({
  person,
  page,
}: {
  person: Person;
  page: string;
}) => {
  return (
    <>
      <Link to={`/people/${person.name}`} state={{ person }}>
        <ImageComponent
          name={person.name}
          photoName={person.photoName}
          page={page}
        />
      </Link>
      <PersonInfoComponent person={person} />
    </>
  );
};

export default PersonComponent;
