import React from "react";

const Label = ({ label, value }) => {
  return (
    <article className="text-lg capitalize my-1">
      <h4 className="inline mr-2">{label}:</h4>
      <span className="font-semibold spacing tracking-wide">{value}</span>
    </article>
  );
};

export default Label;
