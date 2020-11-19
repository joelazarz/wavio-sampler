import styled from 'styled-components';
import { TitleContainer } from '../../css/TitleContainer';
//
import LoopColorPicker from '../kitUtils/LoopColorPicker';

const LoopControlContainer = styled.div`
  grid-row-start: 4;
  grid-row-end: 6;
  grid-column-start: 14;
  grid-column-end: 17;
  min-height: 20em;
  margin-top: 1rem;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.paneBackground};
`

const LoopControl = () => {

  return (
    <LoopControlContainer>
      <TitleContainer>Loop Control</TitleContainer>
      <LoopColorPicker />
    </LoopControlContainer>
  );
};

export default LoopControl;
