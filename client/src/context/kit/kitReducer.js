// import types
import { 
  ADD_REGION,
  HOVER_REGION,
  CLEAR_HOVER,
  CLICK_REGION,
  CLEAR_CLICK,
  LOOP_COLOR,
  WAVE_COLOR 
} from "../types";

export default (state, action) => {
  switch(action.type){
    case ADD_REGION:
      return {
        ...state,
        sampleRegions: [...state.sampleRegions, action.payload]
      };

    case HOVER_REGION:
      return {
        ...state,
        hoverRegion: action.payload,
        // clickRegion: null
      };
    
    case CLEAR_HOVER:
      return {
        ...state,
        hoverRegion: null
      };
    
    case CLICK_REGION:
      return {
        ...state,
        hoverRegion: null,
        clickRegion: action.payload
      };
    
    case CLEAR_CLICK:
      return {
        ...state,
        clickRegion: null
      };

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