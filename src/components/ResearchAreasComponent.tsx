import { areas } from "../assets/researchProjects.json";
import type { ResearchProject } from "../types";
import Paper from "./PaperComponent";
import Video from "./VideoComponent";

const ResearchAreasComponent = () => {
  return (
    <>
      <h2>Basic Research Areas</h2>
      <ul>
        {areas.map((area: ResearchProject) => (
          <li>
            {area.description}: e.g. <Paper papers={area.papers} />
            <Video videos={area.videos} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ResearchAreasComponent;
