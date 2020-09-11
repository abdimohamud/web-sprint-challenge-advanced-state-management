import axios from "axios";

// ACTION TYPES
export const POST_DATA = "POST_DATA";
export const POST_DATA_SUCCESS = "POST_DATA_SUCCESS";
export const POST_DATA_ERROR = "POST_DATA_ERROR";

// ACTION CREATORS
export const postSmurfsData = (info) => {
  return (dispatch) => {
    axios
      .post("http://localhost:3333/smurfs", dispatch({ type: POST_DATA, payload:info }))
      .then((response) => {
        dispatch({ type: POST_DATA_SUCCESS, payload: response.data });
      })
      .catch((error) => {
        dispatch({
          type: POST_DATA_ERROR,
          payload: { message: "Whoops! Can't get your cat facts for you!" }
        });
      });
  };
};