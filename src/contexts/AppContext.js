import React, { useContext, useReducer } from "react";
import { reducer } from "../hooks/reducer";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { selectedCountry: null });

  function setSelectedCountry(country) {
    dispatch({ type: "SET_COUNTRY", payload: { country } });
  }

  return (
    <AppContext.Provider value={{ ...state, setSelectedCountry }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
