import "../App.css";
import info from "../assets/info.json";
import AboutUsComponent from "../components/AboutUsComponent";
import InfoComponent from "../components/InfoComponent";
import { Info } from "../types";

const pageItems = ["About Us", "Mission", "Philosophy", "Funding"];

const filteredPageInfo = info.info.filter((item) =>
  pageItems.includes(item.title)
);

const HomePage = () => {
  return (
    <>
      <AboutUsComponent />
      {filteredPageInfo.map((info: Info) => (
        <div>
          <InfoComponent info={info} />
        </div>
      ))}
      {/* <MissionComponent />
      <PhilosophyComponent />
      <FundingComponent /> */}
    </>
  );
};

export default HomePage;
