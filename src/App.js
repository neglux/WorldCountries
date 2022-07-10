import React from "react";
import Country from "./pages/Country";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="bg-darkgray-900 text-darkgray-100">
      <Home />
      <Country />
    </div>
  );
};

export default App;
