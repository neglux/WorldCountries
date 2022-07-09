import React from "react";
import Page from "../components/Page";
import SearchBox from "../components/SearchBox";
import logo from "../assets/logo.svg";
import CountryLineBox from "../components/CountryLineBox";
import Line from "../components/Line";

const Home = () => {
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
        <ul className="grid grid-cols-4 gap-2 w-full my-10 overflow-y-auto">
          <li>
            <CountryLineBox />
          </li>
          <li>
            <CountryLineBox />
          </li>
          <li>
            <CountryLineBox />
          </li>
          <li>
            <CountryLineBox />
          </li>
          <li>
            <CountryLineBox />
          </li>
        </ul>
      </div>
    </Page>
  );
};

export default Home;
