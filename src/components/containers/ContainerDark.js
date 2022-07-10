import React from "react";
import Line from "../Line";

const ContainerDark = ({ children, title, style }) => {
  return (
    <article
      className={`px-5 py-5 bg-darkgray-700 ${style} rounded-md shadow-md`}
    >
      <div className="mb-5 w-full">
        <h3 className="capitalize w-full mb-5 text-xl">{title}</h3>
        <Line />
      </div>
      {children}
    </article>
  );
};

export default ContainerDark;
