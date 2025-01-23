import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import MainLayout from "./layouts/mainLayout";
// import { infoLoader } from "./loaders/InfoLoader";
// import { personLoader } from "./loaders/PersonLoader";
import fs from "fs";
import AddPersonPage from "./Pages/AddPersonPage";
import HomePage from "./Pages/HomePage";
import NotFoundPage from "./Pages/NotFoundPage";
import PeoplePage from "./Pages/PeoplePage";
import PersonPage from "./Pages/PersonPage";
import ResearchPage from "./Pages/ResearchPage";
import TeachingPage from "./Pages/TeachingPage";
import { personLoader } from "./loaders/PersonLoader";
import { Person } from "./types";

function App() {
  const addPerson = (person: Person) => {
    //add person to people.json
    const people = JSON.parse(fs.readFileSync("assets/people.json", "utf8"));
    people.push(person);
    fs.writeFileSync("assets/people.json", JSON.stringify(people, null, 2));
  };
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/research" element={<ResearchPage />} />
        <Route path="/teaching" element={<TeachingPage />} />
        <Route path="/people" element={<PeoplePage />} />
        <Route
          path="/people/:name"
          element={<PersonPage />}
          loader={personLoader}
        />
        <Route
          path="/people/add-person"
          element={<AddPersonPage addPersonSubmit={addPerson} />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
