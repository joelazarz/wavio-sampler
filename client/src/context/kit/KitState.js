import { useReducer } from 'react';
import axios from 'axios';
import KitContext from './kitContext';
import kitReducer from './kitReducer';
// import types
import {
  WAVE_COLOR
} from '../types';

const KitState = props => {
  const initialState ={
    waveformColor: 'rgb(255, 255, 255, 100)'
  };

  const [state, dispatch] = useReducer(kitReducer, initialState);

  // Get kits

  // Get selected kit

  // Create kit

  // Edit kit

  // Delete kit

  // Create region

  // Delete region

  // Waveform Color
  const setWaveformColor = (color) => {
    dispatch({
      type: WAVE_COLOR,
      payload: color
    });
  };

  return (
    <KitContext.Provider
    value={{
      waveformColor: state.waveformColor,
      setWaveformColor,
    }}
    >
      {props.children}
    </KitContext.Provider>
  );
};

export default KitState;
