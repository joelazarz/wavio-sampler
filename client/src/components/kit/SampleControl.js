import styled from 'styled-components';
import { TitleContainer } from '../../css/TitleContainer';
//
import SampleColorPicker from '../kitUtils/SampleColorPicker';
import RegionCreator from '../kitUtils/RegionCreator';
import RegionHover from '../kitUtils/RegionHover';
import RegionClick from '../kitUtils/RegionClick';

const SampleControlContainer = styled.div`
  grid-row-start: 1;
  grid-row-end: 3;
  grid-column-start: 13;
  grid-column-end: 17;
  margin-top: 1rem;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.paneBackground};
`

const SampleControl = () => {
  return (
    <SampleControlContainer>
      <TitleContainer>Options</TitleContainer>
      <SampleColorPicker />
      <RegionCreator />
      <RegionHover />
      <RegionClick />
    </SampleControlContainer>
  );
};

export default SampleControl;
