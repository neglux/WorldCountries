import React, { useContext, useReducer } from "react";
import { reducer } from "../hooks/reducer";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {});

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
