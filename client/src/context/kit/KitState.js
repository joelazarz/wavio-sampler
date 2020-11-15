import { useReducer } from 'react';
import axios from 'axios';
import KitContext from './kitContext';
import kitReducer from './kitReducer';
// import types
import {
  ADD_REGION,
  WAVE_COLOR,
  LOOP_COLOR
} from '../types';

const KitState = props => {
  const initialState = {
    sampleRegions: [],
    waveformColor: 'rgb(255, 255, 255, 100)',
    loopColor: 'rgb(255, 255, 255, 100)'
  };

  const [state, dispatch] = useReducer(kitReducer, initialState);

  // Get kits

  // Get selected kit

  // Create kit

  // Edit kit

  // Delete kit

  // Add Region to state in RegionCreator.js
  const addRegion = (region) => {
    dispatch({
      type: ADD_REGION,
      payload: region
    });
  };

  // Create region

  // Delete region

  // Waveform Color
  const setWaveformColor = (color) => {
    dispatch({
      type: WAVE_COLOR,
      payload: color
    });
  };

  // Loop Color
  const setLoopColor = (color) => {
    dispatch({
      type: LOOP_COLOR,
      payload: color
    });
  };

  return (
    <KitContext.Provider
    value={{
      sampleRegions: state.sampleRegions,
      addRegion,
      waveformColor: state.waveformColor,
      loopColor: state.loopColor,
      setWaveformColor,
      setLoopColor,
    }}
    >
      {props.children}
    </KitContext.Provider>
  );
};

export default KitState;
