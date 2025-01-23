import { useLoaderData } from "react-router-dom";
import "../App.css";
import ButtonComponent from "../components/ButtonComponent";
import ImageComponent from "../components/ImageComponent";
import PersonInfoComponent from "../components/PersonInfoComponent";
import { Person } from "../types";
const PersonPage = () => {
  const { person } = useLoaderData() as { person: Person };
  if (!person) return null;
  return (
    <div>
      <h1>{person.name}</h1>
      <ImageComponent
        name={person.name}
        photoName={person.photoName}
        page="person"
      />
      <PersonInfoComponent person={person} />
      <ButtonComponent path="/people" text="Back to People" />
    </div>
  );
};

export default PersonPage;
