import React, { useEffect, useState } from "react";
import Page from "../components/containers/Page";
import SearchBox from "../components/SearchBox";
import logo from "../assets/logo.svg";
import CountryLineBox from "../components/CountryLineBox";
import Line from "../components/Line";

const Home = () => {
  const [query, setQuery] = useState();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const url = `https://restcountries.com/v3.1/name/${query}`;
  async function fetchData() {
    try {
      const response = await fetch(url);
      const fetchedData = await response.json();
      setData(fetchedData);
      setIsLoading(false);
    } catch (error) {
      throw new Error(error);
    }
  }

  function checkQuery(query) {
    const isEmpty = (query) => !query;
    const isLongerThanLimit = (query) => query.length >= 3;

    return !isEmpty(query) && isLongerThanLimit(query);
  }

  return (
    <Page>
      <div className="flex flex-col justify-start items-center">
        <div className="w-full mb-10">
          <img
            className="mt-40 mb-10 mx-auto"
            src={logo}
            alt="world countries logo"
          />
          <SearchBox
            value={query}
            changeHandler={setQuery}
            clickHandler={() => {
              setData([]);
              console.log(checkQuery(query));
              if (checkQuery(query)) fetchData();
            }}
          />
        </div>
        <Line />
        <ul className="grid grid-cols-4 gap-2 w-full my-10 overflow-y-auto">
          {data.map((item, index) => {
            return (
              <li key={index}>
                <CountryLineBox
                  code={item.cca3}
                  clickHandler={() => {
                    // route to country page
                  }}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </Page>
  );
};

export default Home;
