import type { Info } from "../types";

const InfoComponent = ({ info }: { info: Info }) => {
  return (
    <div>
      <h2>{info.title}</h2>
      <p>{info.description}</p>
    </div>
  );
};

export default InfoComponent;
