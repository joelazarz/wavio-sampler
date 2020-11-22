import { useReducer } from 'react';
import { availableId } from '../../utils/availableId';
import LoopContext from './loopContext';
import loopReducer from './loopReducer';
// import types
import {
  ADDTO_LOOPBANK,
  CALLUP_LOOP,
  LOOP_COLOR
} from '../types';

const LoopState = props => {
  const initialState = {
    loopBank: [],
    calledUpLoop: null,
    loopColor: 'rgb(255, 255, 255, 100)'
  };

  const [state, dispatch] = useReducer(loopReducer, initialState);

  // add loop to loopBank - LoopStation.js within clipLoop function
  // loopBank: [...state.loopBank, loop] - limit 8
  const addToLoopBank = loop => {
    if(state.loopBank.length === 8) { return; };

    let arr = state.loopBank.map(l => l.id);
    let loopToBank = Object.assign(loop, {id: availableId(arr)});

    dispatch({
      type: ADDTO_LOOPBANK,
      payload: loopToBank
    });
  };

  const callUpLoop = id => {
    dispatch({
      type: CALLUP_LOOP,
      payload: id
    });
  };

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
      loopBank: state.loopBank,
      calledUpLoop: state.calledUpLoop,
      loopColor: state.loopColor,
      addToLoopBank,
      callUpLoop,
      setLoopColor
    }}
    >
      {props.children}
    </LoopContext.Provider>
  );
};

export default LoopState;
