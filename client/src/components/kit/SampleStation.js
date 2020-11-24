import React, { memo } from 'react';
import { useEffect, useState, useRef, useContext } from 'react';
import SamplePlayback from './SamplePlayback';
import SampleControl from './SampleControl';
import DropZone from '../kitUtils/DropZone';
// context
import SampleContext from '../../context/sample/sampleContext';
import KitContext from '../../context/kit/kitContext';
//
import WaveSurfer from 'wavesurfer.js';
import RegionPlugin from 'wavesurfer.js/dist/plugin/wavesurfer.regions.min.js';
import styled from 'styled-components';

const SampleContainer = styled.div`
  grid-row-start: 2;
  grid-row-end: 3;
  grid-column-start: 4;
  grid-column-end: 14;
  padding-right: 2rem;
  padding-left: 2rem;
  overscroll-behavior-x: none;
`

const SampleStation = memo(() => {
  const sampleContext = useContext(SampleContext);
  const kitContext = useContext(KitContext);

  const {
    loadedKit,
    sampleBlob,
    waveformColor,
    updateSampleWaveRegions, 
    sampleRegions,
    setRecording,
    setHoveredRegion,
    clearHoveredRegion,
    setClickedRegion,
  } = sampleContext;

  const { setLoopBlob } = kitContext;

  const sampleformRef = useRef();
  const sampleWave = useRef();
  const isFirstRender = useRef(true);

  // refs for recording 
  const gain = useRef();
  const dest = useRef();
  const mediaRecorder = useRef();

  // state for recording
  const [chunks, setChunks] = useState([]);
  
  useEffect(() => {
    if(!sampleBlob || loadedKit) { return; };

    sampleWave.current = WaveSurfer.create({
      container: sampleformRef.current,
      waveColor: 'white',
      progressColor: '#B8D6DA',
      height: 200,
      cursorColor: 'orange',
      cursorWidth: 2,
      hideScrollbar: false,
      autoCenter: false,
      scrollParent: true,
      plugins: [
        RegionPlugin.create({
          slop: 8,
          regions: []
        })
      ]
    });

    if (sampleBlob) {
      sampleWave.current.load(sampleBlob);
    } else if (loadedKit) {
      sampleWave.current.load(loadedKit.sample);
      sampleWave.current.setWaveColor(waveformColor);
    }; 

    gain.current = sampleWave.current.backend.ac.createGain();
    sampleWave.current.backend.setFilter(gain.current); 
    dest.current = sampleWave.current.backend.ac.createMediaStreamDestination();
    mediaRecorder.current = new MediaRecorder(dest.current.stream);
    gain.current.connect(dest.current);
    // eslint-disable-next-line
  }, [sampleBlob, loadedKit]);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    };
    
    recordInput();
    // eslint-disable-next-line
  }, [setRecording]);
  
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    };
    if(!sampleBlob || loadedKit) { return; };

    sampleWave.current.clearRegions();
    sampleRegions.forEach(reg => {
      sampleWave.current.addRegion(reg);
    })
    // eslint-disable-next-line
  }, [sampleRegions]);
  
  useEffect(() => {
    if(!sampleBlob || loadedKit) { return; };

    sampleWave.current.setWaveColor(waveformColor);
    sampleWave.current.setProgressColor(waveformColor);
    // eslint-disable-next-line
  }, [waveformColor]);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    };

    if(!sampleBlob || loadedKit) { return; };

    sampleWave.current.on('region-mouseenter', (e) => {
      setHoveredRegion(e)
    });

    sampleWave.current.on('region-mouseleave', (e) => {
      clearHoveredRegion()
    });

    sampleWave.current.on('region-click', (e) => {
      setClickedRegion(e)
    });
    // eslint-disable-next-line
  }, [sampleBlob, loadedKit]);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    };
    if(!sampleBlob || loadedKit) { return; };


    sampleWave.current.on('region-update-end', (e) => {
      updateSampleWaveRegions([e])
    });
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    };
    if(!sampleBlob || loadedKit) { return; };

    window.addEventListener('keydown', handleTrigger);
    return () => window.removeEventListener('keydown', handleTrigger);
    // eslint-disable-next-line
  }, [sampleRegions]);

  // functions 
  const handleTrigger = (e) => {
    if(!sampleBlob || loadedKit) { return; };
    if (document.activeElement.matches('.text-input')) { return; };
    if (!sampleWave.current.regions.list[e.key]) { return; };
    sampleWave.current.regions.list[e.key].play();
  };

  const playSample = () => {
    if(!sampleBlob || loadedKit) { return; };
    sampleWave.current.play();
  };

  const stopSample = () => {
    if(!sampleBlob || loadedKit) { return; };
    sampleWave.current.stop();
  };

  const pauseSample = () => {
    if(!sampleBlob || loadedKit) { return; };
    sampleWave.current.playPause();
  };

  const rateSlider = (val) => {
    if(!sampleBlob || loadedKit) { return; };
    sampleWave.current.setPlaybackRate(val);
  };

  const zoomSlider = (val) => {
    if(!sampleBlob || loadedKit) { return; };
    sampleWave.current.zoom(val);
  };

  const recordInput = () => {
    if(!sampleBlob || loadedKit) { return; };
    setLoopBlob(null);

    if(setRecording) {
      let recordedChunks = [];
  
      mediaRecorder.current.start();
      mediaRecorder.current.ondataavailable = (e) => {
        recordedChunks.push(e.data);
      };

      setChunks(recordedChunks);
    } else if (!setRecording) {
      mediaRecorder.current.stop();
      mediaRecorder.current.onstop = () => {
        const blob = new Blob(chunks, { 'type' : 'audio/wav; codecs=opus' });
        let recordedBlob = URL.createObjectURL(blob);
        setLoopBlob(recordedBlob);
      };
      setChunks([]);
    };
  };
  

  return (
    <>
    <SamplePlayback 
    playSample={playSample}
    stopSample={stopSample}
    pauseSample={pauseSample}
    rateSlider={rateSlider}
    zoomSlider={zoomSlider}
    />
    { sampleBlob || loadedKit ? <SampleContainer ref={sampleformRef} /> : <DropZone /> }
    <SampleControl />
    </>
  );
});

export default SampleStation;
