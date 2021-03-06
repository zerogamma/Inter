import { mock } from "../Mock";

const fetchSuccess = (data) => ({
  type: "FETCH_SUCCESS",
  payload: { data }
});

const fetchData = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchSuccess(mock));
    } catch (e) {
      console.log(e);
    }
  };
};

export default fetchData;
