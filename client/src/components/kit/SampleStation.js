import WaveSurfer from 'wavesurfer.js';
import RegionPlugin from 'wavesurfer.js/dist/plugin/wavesurfer.regions.min.js';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';


const SampleContainer = styled.div`
  grid-row-start: 2;
  grid-row-end: 3;
  grid-column-start: 4;
  grid-column-end: 14;
  padding-right: 2rem;
  padding-left: 2rem;
`

const SampleStation = () => {

  const sampleformRef = useRef();

  useEffect(() => {
    const sampleWave = WaveSurfer.create({
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

    sampleWave.load('https://ia802805.us.archive.org/18/items/cd_studio-one-showcase-vol.-1_various-artists-alton-ellis-cornel-campbel/disc1/10.%20Johnny%20Osbourne%20-%20All%20I%20Have%20Is%20Love_sample.mp3')
  }, []);

  return (
    <SampleContainer ref={sampleformRef}></SampleContainer>
  );
};

export default SampleStation;
