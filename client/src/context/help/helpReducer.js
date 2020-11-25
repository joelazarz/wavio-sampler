// import types
import { 
  RECORD_HELP, 
  EJECT_HELP,
  ADDREGION_HELP, 
  SAVEREGION_HELP, 
  LOADCLIP_HELP,
  SEQUENCECLIP_HELP, 
  REMOVECLIP_HELP,
  CLEARSEQUENCE_HELP, 
  EDITLOOP_HELP, 
  CAPTURELOOP_HELP, 
  DOWNLOAD_HELP, 
  LOADKIT_HELP,
  LOADREGION_HELP,
  CLEAR_HELP
} from "../types";

// eslint-disable-next-line
export default (state, action) => {
  switch(action.type){
    case RECORD_HELP:
      return {
        ...state,
        msg: action.payload
      }

    case CLEAR_HELP:
      return {
        ...state,
        msg: action.payload
      }
    default:
    return state;
  };
};