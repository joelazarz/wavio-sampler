import { useReducer } from 'react';
import axios from 'axios';
import SampleContext from './sampleContext';
import sampleReducer from './sampleReducer';
// import types
import {
  UPLOAD_SAMPLE,
  LOAD_SAMPLE,
  CREATE_KIT,
  ADD_REGION,
  SET_REGIONS,
  SET_RECORD,
  HOVER_REGION,
  CLICK_REGION,
  CLEAR_CLICK,
  REMOVE_REGION,
  WAVE_COLOR,
  CLEAR_HOVER
} from '../types';

const KitState = props => {
  const initialState = {
    loadedKit: null,
    sampleLink: null,
    sampleBlob: null,
    sampleRegions: [],
    setRecording: false,
    hoveredRegion: null,
    clickedRegion: null,
    waveformColor: 'rgb(255, 255, 255, 100)'
  };

  const [state, dispatch] = useReducer(sampleReducer, initialState);

  // Get kits

  // Get selected kit

  // Create kit
  // loadedKit: res.data
  const createKit = async formData => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      const res = await axios.post('/api/kits', formData, config);

      dispatch({
        type: CREATE_KIT,
        payload: res.data
      });

    } catch (err) {
      console.log(err);
      // create kit error
    };
  };

  // Edit kit

  // Delete kit

  // Upload sample from SaveKitForm.js
  // sampleLink: res link from s3 bucket
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

  // Load sample into kit - SampleStation.js
  // sampleBlob: sample
  const loadSample = sample => {
    dispatch({
      type: LOAD_SAMPLE,
      payload: sample
    });
  };

  // Add Region to sample waveform - RegionCreator.js
  // sampleRegions: ...regions, region
  const addRegion = region => {
    dispatch({
      type: ADD_REGION,
      payload: region
    });
  };

  // update Region in sampleRegions array after an update (resize,drag) - SampleStation.js
  // sampleRegions: update specific region within array
  const updateSampleWaveRegions = region => {
    dispatch({
      type: SET_REGIONS,
      payload: region
    });
  };

  // set recording status to true - SamplePlayback.js
  // setRecord: !state.setRecording
  const setRecord = status => {
    dispatch({ 
      type: SET_RECORD,
      payload: status 
    });
  };

  // set Region that is being hovered to display in RegionHover.js - SampleStation.js 
  // hoveredRegion: region
  const setHoveredRegion = region => {
    dispatch({
      type: HOVER_REGION,
      payload: region
    });
  };

  // unset Region that was hovered - SampleStation.js
  // hoveredRegion: null
  const clearHoveredRegion = () => {
    dispatch({ type: CLEAR_HOVER });
  };

  // set clicked region to load into RegionClick.js - SampleStation.js
  // clickedRegion: region
  const setClickedRegion = region => {
    dispatch({
      type: CLICK_REGION,
      payload: region
    });
  };

  // clear clicked region from RegionClick.js
  // clickedRegion: null
  const clearClickedRegion = () => {
    dispatch({ type: CLEAR_CLICK });
  };

  // Remove region from current waveform
  // sampleRegions: remove specific region from array
  const removeSelectedRegion = id => {
    dispatch({
      type: REMOVE_REGION,
      payload: id
    });
  };

  // Create region in db

  // Delete region from db

  // Waveform Color - sampleStation.js
  // waveformColor: color
  const setWaveformColor = color => {
    dispatch({
      type: WAVE_COLOR,
      payload: color
    });
  };

  return (
    <SampleContext.Provider
    value={{
      loadedKit: state.loadedKit,
      sampleLink: state.sampleLink,
      sampleBlob: state.sampleBlob,
      sampleRegions: state.sampleRegions,
      setRecording: state.setRecord,
      hoveredRegion: state.hoveredRegion,
      clickedRegion: state.clickedRegion,
      waveformColor: state.waveformColor,
      createKit,
      uploadSample,
      loadSample,
      addRegion,
      updateSampleWaveRegions,
      setRecord,
      setHoveredRegion,
      setClickedRegion,
      clearHoveredRegion,
      clearClickedRegion,
      removeSelectedRegion,
      setWaveformColor,
    }}
    >
      {props.children}
    </SampleContext.Provider>
  );
};

export default KitState;