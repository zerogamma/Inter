import React from "react";

const FilterComponent = ({ filter }) => {
  const { co, pos } = filter;
  return (
    <div className="filterContainer">
      {co &&
        co.split(",").map((company, index) => (
          <div className="filterComp" key={index}>
            {company}
          </div>
        ))}
      {pos &&
        pos.split(",").map((position, index) => (
          <div className="filterComp" key={index}>
            {position}
          </div>
        ))}
    </div>
  );
};

export default FilterComponent;
