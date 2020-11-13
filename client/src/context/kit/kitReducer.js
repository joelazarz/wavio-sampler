// import types

import { 
  WAVE_COLOR 
} from "../types";

export default (state, action) => {
  switch(action.type){
    case WAVE_COLOR:
      return {
        ...state,
        waveformColor: action.payload
      };

      default:
      return state;
  };
};