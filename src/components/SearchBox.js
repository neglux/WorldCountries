import React, { useState } from "react";
import strings from "../data/strings";
import CountryLineBox from "./containers/CountryLineBox";
import { AiOutlineSearch } from "react-icons/ai";
import { useGlobalContext } from "../contexts/AppContext";

const SearchBox = ({ isNavbarSearch }) => {
  const { placeholder, maxLength } = strings.searchBox;
  const { searchResults, setSearchResults } = useGlobalContext();
  const [query, setQuery] = useState();
  const [isResultWindowOpen, setIsResultWindowOpen] = useState(false);
  const url = `https://restcountries.com/v3.1/name/${query}`;

  async function fetchData() {
    try {
      const response = await fetch(url);
      const fetchedData = await response.json();
      setSearchResults(fetchedData);
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
    <div className="relative">
      <div className="flex justify-between items-center w-2/4 h-[50px] mb-5 bg-darkgray-500 rounded-lg shadow-lg mx-auto">
        <input
          className="px-5 flex-grow h bg-darkgray-500 outline-none border-r-2 border-darkgray-300"
          type="text"
          placeholder={placeholder}
          maxLength={maxLength}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
        <button
          className="text-2xl px-5"
          onClick={() => {
            setSearchResults([]);
            if (checkQuery(query)) {
              fetchData();
              if (isNavbarSearch) setIsResultWindowOpen(true);
            }
          }}
        >
          <AiOutlineSearch />
        </button>
      </div>
      {isNavbarSearch && isResultWindowOpen && (
        <ul className="absolute grid grid-cols-3 gap-3 overflow-y-auto my-auto w-full h-[200px] bg-darkgray-700 rounded-lg shadow-lg px-10 py-5">
          {searchResults?.status !== 404 &&
            searchResults.map((item, index) => {
              return (
                <li
                  key={index}
                  onClick={() => {
                    setIsResultWindowOpen(!isResultWindowOpen);
                    setQuery("");
                  }}
                >
                  <CountryLineBox code={item.cca3} />
                </li>
              );
            })}
        </ul>
      )}
    </div>
  );
};

export default SearchBox;
