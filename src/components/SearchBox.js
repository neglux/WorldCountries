import React, { useState } from "react";
import strings from "../data/strings";
import CountryLineBox from "./containers/CountryLineBox";
import { AiOutlineSearch } from "react-icons/ai";
import { FaSpinner } from "react-icons/fa";
import { useGlobalContext } from "../contexts/AppContext";

const SearchBox = ({ isNavbarSearch }) => {
  const { placeholder, maxLength } = strings.searchBox;
  const { searchResults, setSearchResults } = useGlobalContext();
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isResultWindowOpen, setIsResultWindowOpen] = useState(false);

  async function fetchData() {
    const url = `https://restcountries.com/v3.1/name/${query}`;
    try {
      setIsLoading(true);
      const response = await fetch(url);
      if (!response.ok) throw new Error("Not found");
      const fetchedData = await response.json();
      setSearchResults(fetchedData);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
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
      <form
        className="flex justify-between items-center h-[50px] mb-5 bg-darkgray-500 rounded-lg shadow-lg mx-auto sm:w-full lg:w-2/4"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
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
      </form>
      {isLoading && !isNavbarSearch && (
        <div className="w-full flex justify-center text-xl">
          <FaSpinner className="animate-spin" />
        </div>
      )}
      {isNavbarSearch && isResultWindowOpen && (
        <ul className="absolute grid sm:grid-cols-1 lg:grid-cols-3 gap-3 overflow-y-auto my-auto w-full h-[200px] bg-darkgray-700 rounded-lg shadow-lg px-10 py-5">
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
