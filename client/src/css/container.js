import styled from "styled-components";

const Container = styled.div`
  max-width: 100vw;
  font-family: 'Roboto Mono', monospace;
  font-size: 12px;
  /* min-height: 100vh; */
  margin: 0rem 1rem 1rem 1rem;
  padding: 2.5rem 0rem 0rem 0rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12px, auto));
  grid-template-rows: repeat(16, minmax(12px, auto));
  gap: 0px 0px;
`

export default Container; 