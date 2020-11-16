import SamplePlayback from './SamplePlayback';
import SampleControl from './SampleControl';

import KitContext from '../../context/kit/kitContext';

import WaveSurfer from 'wavesurfer.js';
import RegionPlugin from 'wavesurfer.js/dist/plugin/wavesurfer.regions.min.js';
import { useEffect, useRef, useContext } from 'react';
import styled from 'styled-components';


const SampleContainer = styled.div`
  grid-row-start: 2;
  grid-row-end: 3;
  grid-column-start: 5;
  grid-column-end: 13;
  padding-right: 2rem;
  padding-left: 2rem;
`

const SampleStation = () => {
  const kitContext = useContext(KitContext);
  const {
    updateSampleWaveRegions, 
    sampleRegions, 
    waveformColor,
    setHoverRegion,
    setClickRegion,
    clickRegion,
    deleteCounter,
    clearHoverRegion,
  } = kitContext;

  const sampleformRef = useRef();
  const sampleWave = useRef();

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

    sampleWave.current.load('https://ia800104.us.archive.org/9/items/cd_my-love-is-your-love_whitney-houston-whitney-houston-feat.-fait/disc1/03.%20Whitney%20Houston%20-%20My%20Love%20Is%20Your%20Love_sample.mp3');
  }, []);

  const isFirstRender = useRef(true);
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    };
  /*logic for component did update*/
    sampleWave.current.clearRegions();
    sampleRegions.map(reg => {
      sampleWave.current.addRegion(reg)
    })
  }, [sampleRegions]);

  useEffect(() => {
    // let progressColor = waveformColor.replace(/[\d\.]+\)$/g, '0.3)');
    sampleWave.current.setWaveColor(waveformColor);
    sampleWave.current.setProgressColor(waveformColor);
  }, [waveformColor]);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    };

    sampleWave.current.on('region-mouseenter', (e) => {
      setHoverRegion(e)
    });

    sampleWave.current.on('region-mouseleave', (e) => {
      clearHoverRegion()
    });

    sampleWave.current.on('region-click', (e) => {
      setClickRegion(e)
    });
  }, []);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    };

    sampleWave.current.on('region-update-end', (e) => {
      // console.log(e);
      updateSampleWaveRegions([e])
    });
  }, []);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    };

    window.addEventListener('keydown', handleTrigger);
    return () => window.removeEventListener('keydown', handleTrigger)
  }, [sampleRegions]);

  const handleTrigger = (e) => {
    console.log(sampleWave.current.regions.list[e.key]);
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

  return (
    <>
    <SamplePlayback 
    playSample={playSample}
    stopSample={stopSample}
    pauseSample={pauseSample}
    rateSlider={rateSlider}
    zoomSlider={zoomSlider}
    />
    <SampleContainer 
    ref={sampleformRef} 
    />
    <SampleControl />
    </>
  );
};

export default SampleStation;
