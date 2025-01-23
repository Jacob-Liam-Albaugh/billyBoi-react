import info from "../assets/info.json";
import { people } from "../assets/people.json";
import ButtonComponent from "../components/ButtonComponent";
import InfoComponent from "../components/InfoComponent";
import PersonComponent from "../components/PersonComponent";
import { Info } from "../types";

const pageItems = ["Former Members", "How to join the group?"];

const filteredPageInfo = info.info.filter((item) =>
  pageItems.includes(item.title)
);

const PeoplePage = () => {
  return (
    <>
      {people.map((person) => (
        <div>
          <PersonComponent person={person} page="people" />
          <br />
        </div>
      ))}

      {filteredPageInfo.map((info: Info) => (
        <div>
          <InfoComponent info={info} />
        </div>
      ))}
      <ButtonComponent path="/people/add-person" text="Add Person" />
    </>
  );
};

export default PeoplePage;
