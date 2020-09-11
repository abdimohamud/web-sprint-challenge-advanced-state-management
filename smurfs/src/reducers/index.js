import { FETCH_DATA, FETCH_DATA_SUCCESS, FETCH_DATA_ERROR } from "../actions";
import { POST_DATA, POST_DATA_SUCCESS, POST_DATA_ERROR } from "../actions";
import {combineReducers} from 'redux'

 const initialState = {
    smurfs: [],
    newSmurf:{},
    error: "",
  isFetching: false
}

 const reducersOne = (state=initialState, action) => {
    switch(action.type){
        case FETCH_DATA:
      return {
        ...state,
        isFetching: true,
        error: ""
      };
    
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        isFetching: false,
        error: ""
      }
    case FETCH_DATA_ERROR:
        return {
            ...state,
            error: action.payload // handle the error
        };
      
    default:
      return state;
    }
}

const reducersTwo = (state=initialState, action) => {
    switch(action.type){
        case POST_DATA:
      return {
        ...state,
       
      };
    
    case POST_DATA_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        isFetching: false,
        error: ""
      }
    case POST_DATA_ERROR:
        return {
            ...state,
            error: action.payload // handle the error
        };
      
    default:
      return state;
    }
}

export default combineReducers({
    reducersOne,
    reducersTwo
  });
