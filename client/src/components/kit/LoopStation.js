import LoopPlayback from './LoopPlayback';
import LoopControl from './LoopControl';

import KitContext from '../../context/kit/kitContext';

import WaveSurfer from 'wavesurfer.js';
import RegionPlugin from 'wavesurfer.js/dist/plugin/wavesurfer.regions.min.js';
import { useEffect, useRef, useContext } from 'react';
import styled from 'styled-components';

const LoopContainer = styled.div`
  grid-row-start: 5;
  grid-row-end: 6;
  grid-column-start: 3;
  grid-column-end: 14;
  padding-right: 2rem;
  padding-left: 2rem;
`

const LoopStation = () => {
  const kitContext = useContext(KitContext);
  const { 
    loopColor, 
    loopBlob, 
    waveformColor 
  } = kitContext;

  const loopformRef = useRef(null);
  const loopWave = useRef(null);
  
  useEffect(() => {
    if (loopBlob === null) { return };

    loopWave.current = WaveSurfer.create({
      container: loopformRef.current,
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

    if(loopBlob){
      loopWave.current.load(loopBlob);
      loopWave.current.setWaveColor(waveformColor);
    } else {
      loopWave.current.load('https://raw.githubusercontent.com/anars/blank-audio/master/250-milliseconds-of-silence.mp3');
    };

    loopWave.current.zoom(1);
    // eslint-disable-next-line
  }, [loopBlob]);

  useEffect(() => {
    if (!loopBlob) { return };
    loopWave.current.setWaveColor(loopColor);
    loopWave.current.setProgressColor(loopColor);
    // eslint-disable-next-line
  }, [loopColor]);

  const playLoop = () => {
    if(loopWave.current.regions.list['resize']) {
      loopWave.current.play();
      loopWave.current.regions.list['resize'].play();
    };
    loopWave.current.play();
  };
  
  const pauseLoop = () => {
    loopWave.current.playPause();
  };

  const stopLoop = () => {
    loopWave.current.stop();
  };

  const resizeLoop = () => {
    const region = {
      id: 'resize',
      start: 0,
      end: `${loopWave.current.getDuration() - 0.001}`,
      loop: true,
      color: `rgb(246, 155, 155, 0.4)`
    };

    loopWave.current.addRegion(region);
  };

  return (
    <>
    <LoopPlayback
    playLoop={playLoop}
    stopLoop={stopLoop}
    pauseLoop={pauseLoop}
    resizeLoop={resizeLoop}
    />
    { loopBlob ? <LoopContainer ref={loopformRef} /> : <></> }
    <LoopControl />
    </>
  );
};

export default LoopStation;
