// import types
import { 
  ADDTO_LOOPBANK,
  CALLUP_LOOP,
  ADDTO_SEQUENCE,
  LOOP_COLOR 
} from "../types";

// eslint-disable-next-line
export default (state, action) => {
  switch(action.type){
    case ADDTO_LOOPBANK:
      return {
        ...state,
        loopBank: [...state.loopBank, action.payload]
      };

    case CALLUP_LOOP:
      return {
        ...state,
        calledUpLoop: state.loopBank.filter(loop => loop.id === action.payload)
      };
    
    case ADDTO_SEQUENCE:
      return {
        ...state,
        sequenceBank: [...state.sequenceBank, action.payload]
      }

    case LOOP_COLOR:
      return {
        ...state,
        loopColor: action.payload
      };


    default:
      return state;
  };
};