import React from "react";

const CountryLineBox = () => {
  return (
    <div className="flex justify-start items-center w-[300px] h-[40px] bg-darkgray-500 rounded-md shadow-md text-sm cursor-pointer hover:bg-darkgray-300">
      <img
        className="w-[50px] h-[25px] ml-5 overflow-hidden object-contain"
        // src="https://flagcdn.com/{country_code}.svg"
        alt="country flag"
      />
      <h5 className="ml-5">Country Name</h5>
    </div>
  );
};

export default CountryLineBox;
