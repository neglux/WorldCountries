import React from "react";
import { useGlobalContext } from "./contexts/AppContext";
import Country from "./pages/Country";
import Home from "./pages/Home";

const App = () => {
  const { selectedCountry } = useGlobalContext();
  return (
    <div className="bg-darkgray-900 text-darkgray-100">
      {selectedCountry ? <Country {...selectedCountry} /> : <Home />}
      <footer className="text-center mt-auto w-full h-fit py-3 text-sm text-darkgray-300">
        <p>
          2022 ©worldcountries | designed by&nbsp;
          <a
            href="https://github.com/neglux"
            target="_blank"
            className=" text-orange"
          >
            neglux
          </a>
        </p>
      </footer>
    </div>
  );
};

export default App;
