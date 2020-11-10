import styled from 'styled-components';

const SamplePlaybackCotrols = styled.div`
  grid-row-start: 1;
  grid-row-end: 2;
  grid-column-start: 4;
  grid-column-end: 14;
  height: 1.5rem;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 0.25em;
  margin: 1rem;
`

const SamplePlayback = () => {
  return (
    <SamplePlaybackCotrols>

    </SamplePlaybackCotrols>
  )
}

export default SamplePlayback
