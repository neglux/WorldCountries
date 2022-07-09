import React from "react";
import Country from "./pages/Country";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="w-screen h-screen bg-darkgray-900 text-darkgray-100 overflow-y-auto">
      <Home />
      <Country />
    </div>
  );
};

export default App;
