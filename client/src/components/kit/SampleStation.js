import SamplePlayback from './SamplePlayback';
import SampleControl from './SampleControl';

import KitContext from '../../context/kit/kitContext';

import WaveSurfer from 'wavesurfer.js';
import RegionPlugin from 'wavesurfer.js/dist/plugin/wavesurfer.regions.min.js';
import { useEffect, useState, useRef, useContext } from 'react';
import styled from 'styled-components';


const SampleContainer = styled.div`
  grid-row-start: 2;
  grid-row-end: 3;
  grid-column-start: 3;
  grid-column-end: 14;
  padding-right: 2rem;
  padding-left: 2rem;
`

const SampleStation = () => {
  const kitContext = useContext(KitContext);
  const {
    loadedKit,
    sampleBlob,
    waveformColor,
    updateSampleWaveRegions, 
    sampleRegions,
    setRecording,
    setLoopBlob,
    setHoveredRegion,
    clearHoveredRegion,
    setClickedRegion,
  } = kitContext;

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
    sampleWave.current = WaveSurfer.create({
      container: sampleformRef.current,
      waveColor: 'white',
      progressColor: '#B8D6DA',
      height: 180,
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

    sampleWave.current.on('play', () => console.log('play event'));
    sampleWave.current.on('pause', () => console.log('finish event'));

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

    sampleWave.current.clearRegions();
    sampleRegions.forEach(reg => {
      sampleWave.current.addRegion(reg);
    })
  }, [sampleRegions]);
  
  useEffect(() => {
    sampleWave.current.setWaveColor(waveformColor);
    sampleWave.current.setProgressColor(waveformColor);
  }, [waveformColor]);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    };

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
  }, []);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    };

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

    window.addEventListener('keydown', handleTrigger);
    return () => window.removeEventListener('keydown', handleTrigger);
  }, [sampleRegions]);

  // functions 
  const handleTrigger = (e) => {
    if (document.activeElement.matches('.text-input')) { return; };
    if (!sampleWave.current.regions.list[e.key]) { return; };
    sampleWave.current.regions.list[e.key].play();
  };

  const playSample = () => {
    sampleWave.current.play();
  };

  const stopSample = () => {
    sampleWave.current.stop();
  };

  const pauseSample = () => {
    sampleWave.current.playPause();
  };

  const rateSlider = (val) => {
    sampleWave.current.setPlaybackRate(val);
  };

  const zoomSlider = (val) => {
    sampleWave.current.zoom(val);
  };

  const recordInput = () => {
    if(setRecording) {
      let recChunks = [];
  
      mediaRecorder.current.start();
      mediaRecorder.current.ondataavailable = (e) => {
      recChunks.push(e.data);
      };

      setChunks(recChunks);
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
    <SampleContainer ref={sampleformRef} />
    <SampleControl />
    </>
  );
};

export default SampleStation;
