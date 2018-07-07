import React from "react";

const Icon = ({ name }) => (
  <span className="icon">
    <i className={`fa fa-${name}`} />
  </span>
);

export default Icon;
