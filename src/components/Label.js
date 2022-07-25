import React from "react";

const Label = ({ label, value }) => {
  return (
    <h4 className="text-lg capitalize my-1">
      {label}:&nbsp;<span className="font-semibold">{value}</span>
    </h4>
  );
};

export default Label;
