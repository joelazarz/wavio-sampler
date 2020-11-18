import { useReducer } from 'react';
import axios from 'axios';
import KitContext from './kitContext';
import kitReducer from './kitReducer';
// import types
import {
  UPLOAD_SAMPLE,
  LOAD_SAMPLE,
  ADD_REGION,
  SET_REGIONS,
  HOVER_REGION,
  CLICK_REGION,
  CLEAR_CLICK,
  REMOVE_REGION,
  WAVE_COLOR,
  LOOP_COLOR,
  CLEAR_HOVER
} from '../types';

const KitState = props => {
  const initialState = {
    sampleLink: null,
    sample: null,
    sampleRegions: [],
    hoverRegion: null,
    clickRegion: null,
    waveformColor: 'rgb(255, 255, 255, 100)',
    loopColor: 'rgb(255, 255, 255, 100)'
  };

  const [state, dispatch] = useReducer(kitReducer, initialState);

  // Get kits

  // Get selected kit

  // Create kit

  // Edit kit

  // Delete kit

  // Upload sample from SaveKitForm.js
  const uploadSample = async formData => {
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    };

    try {
      const res = await axios.post('/api/upload', formData, config);

      dispatch({
        type: UPLOAD_SAMPLE,
        payload: res.data
      });

    } catch (err) {
      console.log(err);
    };

  };

  // Load sample into kit
  const loadSample = (sample) => {
    dispatch({
      type: LOAD_SAMPLE,
      payload: sample
    });
  };

  // Add Region to sample waveform - RegionCreator.js
  const addRegion = (region) => {
    dispatch({
      type: ADD_REGION,
      payload: region
    });
  };

  // set sampleRegions on every update
  const updateSampleWaveRegions = (region) => {
    dispatch({
      type: SET_REGIONS,
      payload: region
    });
  };

  // Hover region 
  const setHoverRegion = (region) => {
    dispatch({
      type: HOVER_REGION,
      payload: region
    });
  };

  const clearHoverRegion = () => {
    dispatch({ type: CLEAR_HOVER });
  };

  // Click region
  const setClickRegion = (region) => {
    dispatch({
      type: CLICK_REGION,
      payload: region
    });
  };

  const clearClickRegion = () => {
    dispatch({ type: CLEAR_CLICK });
  };

  // Remove region from current waveform
  const removeSelectedRegion = (id) => {
    dispatch({
      type: REMOVE_REGION,
      payload: id
    });
  };

  // Create region in db

  // Delete region from db

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
      sampleLink: state.sampleLink,
      sample: state.sample,
      sampleRegions: state.sampleRegions,
      hoverRegion: state.hoverRegion,
      clickRegion: state.clickRegion,
      waveformColor: state.waveformColor,
      loopColor: state.loopColor,
      uploadSample,
      loadSample,
      addRegion,
      updateSampleWaveRegions,
      setHoverRegion,
      setClickRegion,
      clearHoverRegion,
      clearClickRegion,
      removeSelectedRegion,
      setWaveformColor,
      setLoopColor,
    }}
    >
      {props.children}
    </KitContext.Provider>
  );
};

export default KitState;
