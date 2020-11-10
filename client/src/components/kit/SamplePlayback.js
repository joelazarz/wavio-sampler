import styled from 'styled-components';
import {ReactComponent as PlayIcon} from '../../css/icons/play.svg'
import {ReactComponent as PauseIcon} from '../../css/icons/pause.svg'
import {ReactComponent as StopIcon} from '../../css/icons/stop.svg'

const SamplePlaybackCotrols = styled.div`
  grid-row-start: 1;
  grid-row-end: 2;
  grid-column-start: 4;
  grid-column-end: 14;
  height: 1.5rem;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 0.25em;
  margin: 1rem;
  display: flex;
  place-items: center;
  padding: 0rem 1rem;
  & > svg {
    margin: 0rem 0.5rem;
  }
`

const SamplePlayback = ({ ...props }) => {

  const { playSample, stopSample } = props;

  return (
    <SamplePlaybackCotrols>
      <PlayIcon onClick={playSample} style={{height:'0.8rem', width: '0.8rem', fill: 'lightgreen'}}/>
      <PauseIcon style={{height:'0.8rem', width: '0.8rem', fill: 'lightblue'}}/>
      <StopIcon onClick={stopSample} style={{height:'0.8rem', width: '0.8rem', fill: 'red'}}/>
    </SamplePlaybackCotrols>
  );
};

export default SamplePlayback;
