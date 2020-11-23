import styled from 'styled-components';
import {ReactComponent as PlayIcon} from '../../css/icons/play.svg'
import {ReactComponent as PauseIcon} from '../../css/icons/pause.svg'
import {ReactComponent as StopIcon} from '../../css/icons/stop.svg'
import {ReactComponent as ResizeIcon} from '../../css/icons/resize.svg'
import {ReactComponent as CaptureIcon} from '../../css/icons/capture.svg'
import {ReactComponent as DownloadIcon} from '../../css/icons/download.svg'

const LoopPlaybackCotrols = styled.div`
  grid-row-start: 4;
  grid-row-end: 5;
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
  & > a {
    margin: 0rem 0.5rem;
    height:0.8rem; 
    width: 0.8rem;
  }
`

const LoopPlayback = ({ ...props }) => {

  const { 
    playLoop, 
    stopLoop, 
    pauseLoop,
    resizeLoop,
    clipLoop,
    loopBlob
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
      <ResizeIcon 
      onClick={resizeLoop} 
      style={{fill: 'white'}}
      />
      <CaptureIcon 
      onClick={clipLoop}
      style={{fill: 'white'}}
      />
      <a 
      href={loopBlob} 
      download>
        <DownloadIcon style={{fill: 'white'}} />
      </a>
    </LoopPlaybackCotrols>
  )
};

export default LoopPlayback;
