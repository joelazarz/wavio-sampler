// import types
import { 
  LOOP_COLOR,
  WAVE_COLOR 
} from "../types";

export default (state, action) => {
  switch(action.type){
    case WAVE_COLOR:
      return {
        ...state,
        waveformColor: action.payload
      };
    
    case LOOP_COLOR:
      return {
        ...state,
        loopColor: action.payload
      };

      default:
      return state;
  };
};