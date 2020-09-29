import React from "react";
import QuestionTitleComponent from "../QuestionTitle/QuestionTitleComponent";
import FilterComponent from "../Filter/FilterComponent";

const SearchComponent = (props) => {
  return (
    <div>
      <p>questions</p>
      <FilterComponent filter={props.filter} />
      {props.value.map((val, index) => {
        return <QuestionTitleComponent key={index} title={val.title} />;
      })}
    </div>
  );
};

export default SearchComponent;
