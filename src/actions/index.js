
import * as types from "../constants";
export const fetchJsonData = () => {
  return dispatch => {
    const response = { data: {}, status: true };
    console.log('response', response);
    dispatch({
      type: types.JSON_DATA_FETCH_SUCCESS,
      response
    });
  };
};
