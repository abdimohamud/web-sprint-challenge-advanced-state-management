import axios from "axios";

// ACTION TYPES
export const FETCH_DATA = "FETCH_DATA";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_ERROR = "FETCH_DATA_ERROR";

// ACTION CREATORS
export const getSmurfsData = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_DATA });
    axios
      .get("http://localhost:3333/smurfs")
      .then((response) => {
        dispatch({ type: FETCH_DATA_SUCCESS, payload: response.data });
      })
      .catch((error) => {
        dispatch({
          type: FETCH_DATA_ERROR,
          payload: { message: "Whoops! Can't get your cat facts for you!" }
        });
      });
  };
};