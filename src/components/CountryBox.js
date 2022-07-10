import React from "react";
import { AiTwotoneSound } from "react-icons/ai";

const CountryBox = () => {
  return (
    <article className="flex mt-5 px-10 py-5 bg-darkgray-700 rounded-lg shadow-lg">
      <img
        className="bg-darkgray-500 w-[200px]"
        // src="https://flagcdn.com/{country_code}.svg"
        alt=""
      />
      <div className="w-full ml-10">
        <summary className="flex justify-between w-full text-xl">
          <div>
            <h2 className="font-semibold">Country Name - CODE</h2>
            <h5 className="text-sm mt-1">Official Name</h5>
          </div>
          <h2>Region</h2>
        </summary>
        <ul className="flex mt-5">
          <li className="flex items-center mr-5">
            <AiTwotoneSound className=" text-blue" />
            <span className="ml-2">lang-country name</span>
          </li>
          <li className="flex items-center mr-5">
            <AiTwotoneSound className=" text-blue" />
            <span className="ml-2">lang-country name</span>
          </li>
          <li className="flex items-center mr-5">
            <AiTwotoneSound className=" text-blue" />
            <span className="ml-2">lang-country name</span>
          </li>
        </ul>
      </div>
    </article>
  );
};

export default CountryBox;
