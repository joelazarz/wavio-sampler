import { useReducer } from 'react';
import { helpMessages } from './helpMessages';
import HelpContext from './helpContext';
import helpReducer from './helpReducer';
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
} from '../types';

const HelpState = props => {
  const initialState = {
    msg: null
  };

  const [state, dispatch] = useReducer(helpReducer, initialState);

  // actions
  const setMsg = msg => {
    switch(msg) {
      case "record":
        return dispatch({ type: RECORD_HELP, payload: helpMessages.record });
      case "clear":
        return dispatch({ type: RECORD_HELP, payload: null });
      default:
        return;
    };
  };

  return (
    <HelpContext.Provider
    value={{
      msg: state.msg,
      setMsg
    }}
    >
      {props.children}
    </HelpContext.Provider>
  );
};

export default HelpState;
