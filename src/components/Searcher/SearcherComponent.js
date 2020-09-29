import React from "react";
import QuestionTitleComponent from "../QuestionTitle/QuestionTitleComponent";
import FilterComponent from "../Filter/FilterComponent";
import { filterData } from "../../utils/utilsFunctions";
import { getQueryStringParams } from "../../utils/utilsFunctions";
import _ from "lodash";

const SearchComponent = (props) => {
  const getFilterQuery = getQueryStringParams(window.location.search);
  const data = !_.isEmpty(getFilterQuery)
    ? filterData(props.value, getFilterQuery)
    : props.value;

  // const [data, setData] = useState(filteredData);

  // useEffect(()=>{
  //   setData
  // }[data])

  const resetFunction = () => {
    window.location.href = window.location.origin;
  };

  return (
    <div>
      <div className="lineSeparator" />
      <p className="title">questions</p>
      <div className="filterGroup">
        <FilterComponent className="filterContainer" filter={getFilterQuery} />
        <input
          className="resetButton"
          type="button"
          value="reset"
          onClick={resetFunction}
        />
      </div>
      <div className="questionContainer">
        {data.map((val, index) => {
          return <QuestionTitleComponent key={index} title={val.title} />;
        })}
      </div>
    </div>
  );
};

export default SearchComponent;
