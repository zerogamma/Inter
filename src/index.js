import React from "react";
import ReactDOM from "react-dom";
import fetchData from "./actions/actions";
import SearcherComponent from "./components/Searcher/SearcherComponent";
import store from "./store";
import "./style.css";

store.dispatch(fetchData());

const render = () =>
  ReactDOM.render(
    <SearcherComponent value={store.getState()} />,
    document.getElementById("root")
  );

render();
store.subscribe(render);
