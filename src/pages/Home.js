import React from "react";
import logo from "../assets/logo.svg";
import Page from "../components/containers/Page";
import SearchBox from "../components/SearchBox";
import CountryLineBox from "../components/containers/CountryLineBox";
import Line from "../components/Line";
import { useGlobalContext } from "../contexts/AppContext";

const Home = () => {
  const { searchResults } = useGlobalContext();
  return (
    <Page>
      <div className="flex flex-col justify-start items-center">
        <div className="w-full mb-10">
          <img
            className="mt-40 mb-10 mx-auto"
            src={logo}
            alt="world countries logo"
          />
          <SearchBox />
        </div>
        <Line />
        <ul className="grid sm:grid-cols-1 lg:grid-cols-3 gap-2 w-full my-10 h-[180px] overflow-y-auto">
          {searchResults?.status !== 404 &&
            searchResults.map((item, index) => {
              return (
                <li key={index}>
                  <CountryLineBox code={item.cca3} />
                </li>
              );
            })}
        </ul>
      </div>
    </Page>
  );
};

export default Home;
