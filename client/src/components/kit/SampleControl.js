import styled from 'styled-components';
import { TitleContainer } from '../../css/TitleContainer';

const SampleControlContainer = styled.div`
  grid-row-start: 1;
  grid-row-end: 3;
  grid-column-start: 14;
  grid-column-end: 17;
  margin-top: 1rem;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.paneBackground};
`

const SampleControl = () => {

  return (
    <SampleControlContainer>
      <TitleContainer>Region Control</TitleContainer>
    </SampleControlContainer>
  );
};

export default SampleControl;
