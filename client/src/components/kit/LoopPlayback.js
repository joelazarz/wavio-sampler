import styled from 'styled-components';

const LoopPlaybackCotrols = styled.div`
  grid-row-start: 4;
  grid-row-end: 5;
  grid-column-start: 4;
  grid-column-end: 14;
  height: 1.5rem;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 0.25em;
  margin: 1rem;
`

const LoopPlayback = () => {
  return (
    <LoopPlaybackCotrols>

    </LoopPlaybackCotrols>
  )
}

export default LoopPlayback
