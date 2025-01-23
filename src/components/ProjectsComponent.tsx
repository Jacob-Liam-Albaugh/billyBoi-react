import { projects } from "../assets/researchProjects.json";
import type { ResearchProject } from "../types";
import Paper from "./PaperComponent";
import Video from "./VideoComponent";
const ProjectsComponent = () => {
  return (
    <>
      <h2>Current Projects</h2>
      <ul>
        {projects.map((project: ResearchProject) => (
          <li>
            {project.description}: e.g. <Paper papers={project.papers} />
            <Video videos={project.videos} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProjectsComponent;
