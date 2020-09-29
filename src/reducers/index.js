import {
  filterTitle,
  fitlerCompany,
  fitlerPosition
} from "../utils/utilsFunctions";

export default (state = 0, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return action.payload.data;
    case "FILTER":
      let newData = filterTitle([...state], action.payload.data);
      newData = fitlerCompany(newData, action.payload.data);
      newData = fitlerPosition(newData, action.payload.data);
      return newData;
    default:
      return state;
  }
};
