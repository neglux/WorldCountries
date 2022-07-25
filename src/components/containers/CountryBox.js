import React from "react";
import { AiTwotoneSound } from "react-icons/ai";

const CountryBox = ({ flags, name, cca3, subregion, translations }) => {
  return (
    <article className="flex mt-5 px-10 py-5 bg-darkgray-700 rounded-lg shadow-lg">
      <img className="w-[200px]" src={flags.svg} alt="flag" />
      <div className="w-full ml-10">
        <summary className="flex justify-between w-full text-xl">
          <div>
            <h2 className="font-semibold">
              {name.common} - {cca3}
            </h2>
            <h5 className="text-sm mt-1">{name.official}</h5>
          </div>
          <h2>{subregion}</h2>
        </summary>
        <ul className="flex mt-5">
          <li className="flex items-center mr-5">
            <AiTwotoneSound className=" text-blue" />
            <span className="ml-2">deu - {translations?.deu.common}</span>
          </li>
          <li className="flex items-center mr-5">
            <AiTwotoneSound className=" text-blue" />
            <span className="ml-2">fra - {translations?.fra.common}</span>
          </li>
          <li className="flex items-center mr-5">
            <AiTwotoneSound className=" text-blue" />
            <span className="ml-2">spa - {translations?.spa.common}</span>
          </li>
        </ul>
      </div>
    </article>
  );
};

export default CountryBox;
