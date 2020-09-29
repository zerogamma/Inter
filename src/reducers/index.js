export default (state = 0, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return action.payload.data;
    default:
      return state;
  }
};
