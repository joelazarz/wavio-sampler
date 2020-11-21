import { useReducer } from 'react';
// import axios from 'axios';
import KitContext from './kitContext';
import kitReducer from './kitReducer';
// import types
import {
  SET_LOOPBLOB,
} from '../types';

const KitState = props => {
  const initialState = {
    loopBlob: null
  };

  const [state, dispatch] = useReducer(kitReducer, initialState);

  // set recorded blob to loopBlob - SampleStation.js
  // loopBlob: blob
  const setLoopBlob = blob => {
    dispatch({ 
      type: SET_LOOPBLOB,
      payload: blob 
    });
  };

  return (
    <KitContext.Provider
    value={{
      loopBlob: state.loopBlob,
      setLoopBlob
    }}
    >
      {props.children}
    </KitContext.Provider>
  );
};

export default KitState;
