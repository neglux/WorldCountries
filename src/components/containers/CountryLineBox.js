import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../../contexts/AppContext";

const CountryLineBox = ({ code }) => {
  const { setSelectedCountry } = useGlobalContext();

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const url = `https://restcountries.com/v3.1/alpha/${code}`;
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

  useEffect(() => {
    fetchData();
  }, [code]);

  if (isLoading)
    return (
      <article className="flex justify-start items-center w-4/5 h-[40px] bg-darkgray-500 rounded-md shadow-md text-sm cursor-pointer animate-pulse"></article>
    );
  return (
    <article
      className="flex justify-start items-center w-4/5 h-[40px] bg-darkgray-500 rounded-md shadow-md text-sm cursor-pointer hover:bg-darkgray-300"
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
