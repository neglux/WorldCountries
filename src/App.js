import React from "react";
import { useGlobalContext } from "./contexts/AppContext";
import Country from "./pages/Country";
import Home from "./pages/Home";

const App = () => {
  const { selectedCountry } = useGlobalContext();
  return (
    <div className="bg-darkgray-900 text-darkgray-100">
      {selectedCountry ? <Country {...selectedCountry} /> : <Home />}
    </div>
  );
};

export default App;
