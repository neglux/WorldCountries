import React from "react";
import useFetch from "../../hooks/useFetch";
import { useGlobalContext } from "../../contexts/AppContext";

const CountryLineBox = ({ code }) => {
  const { setSelectedCountry } = useGlobalContext();
  const { isLoading, data } = useFetch(
    `https://restcountries.com/v3.1/alpha/${code}`
  );

  if (isLoading)
    return (
      <article className="flex justify-start items-center sm:w-full lg:w-4/5 h-[40px] bg-darkgray-500 rounded-md shadow-md text-sm cursor-pointer animate-pulse"></article>
    );
  return (
    <article
      className="flex justify-start items-center sm:w-full lg:w-4/5 h-[40px] bg-darkgray-500 rounded-md shadow-md text-sm cursor-pointer hover:bg-darkgray-300"
      onClick={() => {
        setSelectedCountry(data[0]);
      }}
    >
      <img
        className="w-[50px] h-[25px] ml-5 overflow-hidden object-contain"
        src={data[0].flags.svg}
        alt="country flag"
      />
      <h5 className="ml-5">{data[0].name.common}</h5>
    </article>
  );
};

export default CountryLineBox;
