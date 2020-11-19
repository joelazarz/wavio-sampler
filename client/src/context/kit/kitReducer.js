// import types
import { 
  UPLOAD_SAMPLE,
  LOAD_SAMPLE,
  CREATE_KIT,
  ADD_REGION,
  SET_REGIONS,
  HOVER_REGION,
  CLEAR_HOVER,
  CLICK_REGION,
  CLEAR_CLICK,
  REMOVE_REGION,
  LOOP_COLOR,
  WAVE_COLOR 
} from "../types";

// eslint-disable-next-line
export default (state, action) => {
  switch(action.type){
    case UPLOAD_SAMPLE:
      return {
        ...state,
        sampleLink: action.payload
      }

    case LOAD_SAMPLE:
      return {
        ...state,
        sampleBlob: action.payload
      };

    case CREATE_KIT:
      return {
        ...state,
        loadedKit: action.payload,
        sampleLink: null,
        sampleBlob: null,
        sampleRegions: [],
        hoveredRegion: null,
        clickedRegion: null,
        waveformColor: 'rgb(255, 255, 255, 100)',
        loopColor: 'rgb(255, 255, 255, 100)'
      };

    case ADD_REGION:
      return {
        ...state,
        sampleRegions: [...state.sampleRegions, action.payload]
      };

    case SET_REGIONS:
      return {
        ...state,
        sampleRegions: state.sampleRegions.map(obj => action.payload.find(region => region.id === obj.id) || obj)
      };

    case HOVER_REGION:
      return {
        ...state,
        hoveredRegion: action.payload,
        // clickRegion: null
      };
    
    case CLEAR_HOVER:
      return {
        ...state,
        hoveredRegion: null
      };
    
    case CLICK_REGION:
      return {
        ...state,
        hoveredRegion: null,
        clickedRegion: action.payload
      };
    
    case CLEAR_CLICK:
      return {
        ...state,
        clickedRegion: null
      };

    case REMOVE_REGION:
      return {
        ...state,
        sampleRegions: state.sampleRegions.filter(region => region.id !== action.payload),
        clickedRegion: null,
        deleteCounter: state.deleteCounter++
      }

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