import { LoaderFunctionArgs } from "react-router-dom";
import info from "../assets/info.json";
import type { Info } from "../types";

export const infoLoader = async ({ params }: LoaderFunctionArgs) => {
  const infoLoad = info.info.find((info: Info) => info.title === params.title);
  return { infoLoad };
};
