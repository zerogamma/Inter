import React from "react";
import ReactDOM from "react-dom";
import fetchData, { filterData } from "./actions/actions";
import SearcherComponent from "./components/Searcher/SearcherComponent";
import store from "./store";

store.dispatch(fetchData());

const render = () =>
  ReactDOM.render(
    <SearcherComponent
      value={store.getState()}
      filter={(fitlter) => store.dispatch(filterData(fitlter))}
    />,
    document.getElementById("root")
  );

render();
store.subscribe(render);
