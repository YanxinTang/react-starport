import { useContext } from "react";
import GlobalConfigContext from "./GlobalConfigContext";

const useGlobalConfig = () => {
  return useContext(GlobalConfigContext)!;
};

export { useGlobalConfig };
