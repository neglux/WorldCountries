import React from "react";
import Line from "../Line";

const ContainerDark = ({ children, title, style }) => {
  return (
    <div
      className={`flex flex-col bg-darkgray-700 ${style} mt-5 px-5 py-5 rounded-md shadow-md`}
    >
      <div className="mb-10 w-full">
        <h3 className="capitalize w-full mb-5">{title}</h3>
        <Line />
      </div>
      {children}
    </div>
  );
};

export default ContainerDark;
