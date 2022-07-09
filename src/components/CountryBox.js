import React from "react";
import { AiTwotoneSound } from "react-icons/ai";

const CountryBox = () => {
  return (
    <article className="flex justify-center items-start w-full px-10 py-5 mt-5 bg-darkgray-700 rounded-lg shadow-lg">
      <img
        className="bg-darkgray-500 w-[200px] h-[100px]"
        // src="https://flagcdn.com/{country_code}.svg"
        alt=""
      />
      <div className="flex flex-col w-full ml-10">
        <div className="flex justify-between w-full">
          <div>
            <h2 className="text-xl">Country Code - CODE</h2>
            <h5 className="text-sm mt-1">Official Name</h5>
          </div>
          <h2 className="text-xl">Region</h2>
        </div>
        <ul className="flex mt-5">
          <li className="flex justify-center items-center mr-5">
            <AiTwotoneSound className=" text-blue" />
            <span className="ml-2">lang-country name</span>
          </li>
          <li className="flex justify-center items-center mr-5">
            <AiTwotoneSound className=" text-blue" />
            <span className="ml-2">lang-country name</span>
          </li>
          <li className="flex justify-center items-center mr-5">
            <AiTwotoneSound className=" text-blue" />
            <span className="ml-2">lang-country name</span>
          </li>
        </ul>
      </div>
    </article>
  );
};

export default CountryBox;
