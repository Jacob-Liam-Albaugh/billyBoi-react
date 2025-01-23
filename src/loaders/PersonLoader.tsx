import { LoaderFunctionArgs } from "react-router-dom";
import people from "../assets/people.json";
import type { Person } from "../types";

export const personLoader = async ({ params }: LoaderFunctionArgs) => {
  const person = people.people.find(
    (person: Person) => person.name === params.name
  );
  return { person };
};
