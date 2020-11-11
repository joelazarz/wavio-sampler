import styled from 'styled-components';
import {ReactComponent as PlayIcon} from '../../css/icons/play.svg'
import {ReactComponent as PauseIcon} from '../../css/icons/pause.svg'
import {ReactComponent as StopIcon} from '../../css/icons/stop.svg'
import '../../css/slider.css'

const SamplePlaybackCotrols = styled.div`
  grid-row-start: 1;
  grid-row-end: 2;
  grid-column-start: 5;
  grid-column-end: 13;
  height: 1.5rem;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 0.25em;
  margin: 1rem;
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

const RateSlider = styled.input`

`

const ZoomSlider = styled.input`

`

const SamplePlayback = ({ ...props }) => {

  const { 
    playSample, 
    stopSample, 
    pauseSample,
    rateSlider,
    zoomSlider,
  } = props;

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
          min="0.25"
          max="1.75"
          step="0.05"
          onChange={(e) => rateSlider(e.target.value)}
          />
        </SlideContainer>
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
    </SamplePlaybackCotrols>
  );
};

export default SamplePlayback;
