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

  const { waveformColor } = kitContext;

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

    sampleWave.current.load('https://ia802805.us.archive.org/18/items/cd_studio-one-showcase-vol.-1_various-artists-alton-ellis-cornel-campbel/disc1/10.%20Johnny%20Osbourne%20-%20All%20I%20Have%20Is%20Love_sample.mp3');
  }, []);

  useEffect(() => {
    // let progressColor = waveformColor.replace(/[\d\.]+\)$/g, '0.3)');
    sampleWave.current.setWaveColor(waveformColor);
    sampleWave.current.setProgressColor(waveformColor);
    // console.table({
    //   'Waveform Color': waveformColor,
    //   "Progress Color": progressColor
    // });
  }, [waveformColor]);

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
