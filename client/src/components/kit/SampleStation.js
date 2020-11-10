import WaveSurfer from 'wavesurfer.js';
import RegionPlugin from 'wavesurfer.js/dist/plugin/wavesurfer.regions.min.js';
import { useEffect } from 'react';
import styled from 'styled-components';

const SampleContainer = styled.div`
  grid-row-start: 2;
  grid-row-end: 3;
  grid-column-start: 2;
  grid-column-end: 16;
  padding-right: 2rem;
`

const SampleStation = () => {

  useEffect(() => {
    const sampleWave = WaveSurfer.create({
      container: '#sample-wave',
      waveColor: 'rgb(193, 193, 193)',
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
    }, []);

    sampleWave.load('https://ia802805.us.archive.org/18/items/cd_studio-one-showcase-vol.-1_various-artists-alton-ellis-cornel-campbel/disc1/10.%20Johnny%20Osbourne%20-%20All%20I%20Have%20Is%20Love_sample.mp3')
  })

  return (
    <SampleContainer id="sample-wave"></SampleContainer>
  )
};

export default SampleStation;
