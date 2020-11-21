// import types
import { 
  LOOP_COLOR 
} from "../types";

// eslint-disable-next-line
export default (state, action) => {
  switch(action.type){
    case LOOP_COLOR:
      return {
        ...state,
        loopColor: action.payload
      };


    default:
      return state;
  };
};