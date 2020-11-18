import styled from 'styled-components';
import {ReactComponent as PlayIcon} from '../../css/icons/play.svg'
import {ReactComponent as PauseIcon} from '../../css/icons/pause.svg'
import {ReactComponent as StopIcon} from '../../css/icons/stop.svg'

const LoopPlaybackCotrols = styled.div`
  grid-row-start: 4;
  grid-row-end: 5;
  grid-column-start: 3;
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
    height:0.8rem; 
    width: 0.8rem;
  }
`

const LoopPlayback = ({ ...props }) => {

  const { 
    playLoop, 
    stopLoop, 
    pauseLoop 
  } = props;

  return (
    <LoopPlaybackCotrols>
      <PlayIcon 
      onClick={playLoop} 
      style={{fill: 'lightgreen'}}
      />
      <PauseIcon 
      onClick={pauseLoop} 
      style={{fill: 'lightblue'}}
      />
      <StopIcon 
      onClick={stopLoop} 
      style={{fill: 'red'}}
      />
    </LoopPlaybackCotrols>
  )
};

export default LoopPlayback;
