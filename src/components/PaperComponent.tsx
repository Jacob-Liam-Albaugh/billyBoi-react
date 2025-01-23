import { Link } from "react-router-dom";
import type { Paper } from "../types";

const Paper = ({ papers }: { papers: Paper[] }) => {
  return (
    <>
      {papers.map((paper, index) => (
        <Link key={index} to={paper.url} className="linkStyle">
          {`(${paper.name}) `}
        </Link>
      ))}
    </>
  );
};

export default Paper;
