import React from "react";
import strings from "../data/strings";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBox = () => {
  const { placeholder, maxLength } = strings.searchBox;
  return (
    <div className="flex justify-between items-center w-2/4 h-[50px] mb-5 bg-darkgray-500 rounded-lg shadow-lg mx-auto">
      <input
        className="px-5 flex-grow h bg-darkgray-500 outline-none border-r-2 border-darkgray-300"
        type="text"
        placeholder={placeholder}
        maxLength={maxLength}
      />
      <button className="text-2xl px-5">
        <AiOutlineSearch />
      </button>
    </div>
  );
};

export default SearchBox;
