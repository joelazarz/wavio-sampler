import styled from 'styled-components';

const ControlBar = styled.div`
  grid-row-start: 1;
  grid-row-end: 2;
  grid-column-start: 2;
  grid-column-end: 16;
  height: 1.5rem;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 0.25em;
  margin: 1rem;
`

const SampleControls = () => {
  return (
    <ControlBar>

    </ControlBar>
  )
}

export default SampleControls
