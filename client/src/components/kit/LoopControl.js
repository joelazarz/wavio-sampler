import styled from 'styled-components';
import { TitleContainer } from '../../css/TitleContainer';
//
import LoopColorPicker from '../kitUtils/LoopColorPicker';
import LoopBank from '../kitUtils/LoopBank';

const LoopControlContainer = styled.div`
  grid-row-start: 4;
  grid-row-end: 6;
  grid-column-start: 14;
  grid-column-end: 17;
  min-height: 285px;
  margin-top: 2rem;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.paneBackground};
`

const LoopControl = () => {

  return (
    <LoopControlContainer>
      <TitleContainer>Sequencer / Options</TitleContainer>
      <LoopColorPicker />
      <LoopBank />
    </LoopControlContainer>
  );
};

export default LoopControl;
