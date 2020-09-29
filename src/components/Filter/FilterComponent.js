import React, { useState, useEffect } from "react";
import { getQueryStringParams } from "../../utils/utilsFunctions";
import _ from "lodash";

const FilterComponent = ({ filter }) => {
  const getFilterQuery = getQueryStringParams(window.location.search);
  //if (!_.isEmpty(getFilterQuery))
  //filter(getFilterQuery);
  // const [getFilter, setFilter] = useState("");

  // useEffect(() => {
  //   if (!_.isEmpty(getFilter)) filter(getFilter);
  //   console.log(getFilter);
  //   if (getFilter !== getQueryStringParams(window.location.search)) {
  //     setFilter(getQueryStringParams(window.location.search));
  //   }
  // }, [filter]);

  return <div></div>;
};

export default FilterComponent;
