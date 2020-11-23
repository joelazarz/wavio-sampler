import { useContext } from 'react';
import SampleContext from '../../context/sample/sampleContext';
import styled from 'styled-components';
import {ReactComponent as PlayIcon} from '../../css/icons/play.svg'
import {ReactComponent as PauseIcon} from '../../css/icons/pause.svg'
import {ReactComponent as StopIcon} from '../../css/icons/stop.svg'
import {ReactComponent as EjectIcon} from '../../css/icons/eject.svg'
import '../../css/slider.css';

const SamplePlaybackCotrols = styled.div`
  grid-row-start: 1;
  grid-row-end: 2;
  grid-column-start: 3;
  grid-column-end: 14;
  height: 1.5rem;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 0.25em;
  margin: 2rem 1rem 0rem 1rem;
  display: flex;
  place-items: center;
  padding: 0rem 1rem;
  & > svg {
    margin: 0rem 0.5rem;
    height:0.8rem; 
    width: 0.8rem;
  }
`

const SliderControl = styled.div`
  display: flex;
  place-items: center;
  justify-content: space-between;
  width: 100%;
  `

const SlideContainer = styled.div`
  display: flex;
  place-items: center;
`

const RateSlider = styled.input``
const ZoomSlider = styled.input``

const RecordButton = styled.button`
  background-color: ${({ theme }) => theme.nav};
  border: none;
  border-radius: 0.25em;
`

const SamplePlayback = ({ ...props }) => {
  const sampleContext = useContext(SampleContext);
  const { setRecord, setRecording, ejectSample } = sampleContext;

  const { 
    playSample, 
    stopSample, 
    pauseSample,
    rateSlider,
    zoomSlider,
  } = props;

  const handleRecord = () => {
    setRecord(!setRecording);
  };

  const handleEject = () => {
    if(setRecording) { return };
    ejectSample();
  };

  return (
    <SamplePlaybackCotrols>
      <PlayIcon 
      onClick={playSample} 
      style={{fill: 'lightgreen'}}
      />

      <PauseIcon 
      onClick={pauseSample} 
      style={{fill: 'lightblue'}}
      />

      <StopIcon 
      onClick={stopSample} 
      style={{fill: 'red'}}
      />

      <SliderControl>
        <SlideContainer>
          <span>Rate:</span>
          <RateSlider
          className="slider"
          type="range"
          min="0.50"
          max="1.50"
          step="0.05"
          onChange={(e) => rateSlider(e.target.value)}
          />
        </SlideContainer>

        <RecordButton 
        onClick={handleRecord} 
        style={{ 'color': setRecording ? 'red' : 'white' }}>
        RECORD
        </RecordButton>

        <SlideContainer>
          <span>Zoom:</span> 
          <ZoomSlider
          className="slider"
          type="range"
          min="0"
          max="250"
          step="0.5"
          onChange={(e) => zoomSlider(e.target.value)}
          />
        </SlideContainer>
      </SliderControl>

      <EjectIcon 
      onClick={handleEject}
      style={{fill: 'snow', marginLeft: '2em'}}
      />

    </SamplePlaybackCotrols>
  );
};

export default SamplePlayback;
