import { useReducer } from 'react';
import LoopContext from './loopContext';
import loopReducer from './loopReducer';
// import types
import {
  LOOP_COLOR
} from '../types';

const LoopState = props => {
  const initialState = {
    loopColor: 'rgb(255, 255, 255, 100)'
  };

  const [state, dispatch] = useReducer(loopReducer, initialState);

  // cued blobs

  // Loop Color - loopStation.js
  // loopColor: color
  const setLoopColor = color => {
    dispatch({
      type: LOOP_COLOR,
      payload: color
    });
  };

  return (
    <LoopContext.Provider
    value={{
      loopColor: state.loopColor,
      setLoopColor
    }}
    >
      {props.children}
    </LoopContext.Provider>
  );
};

export default LoopState;
