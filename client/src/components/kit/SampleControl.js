import { useState } from 'react';
import styled from 'styled-components';
import { TitleContainer } from '../../css/TitleContainer';
//
import SampleColorPicker from '../kitUtils/SampleColorPicker';
import RegionCreator from '../kitUtils/RegionCreator';
import RegionHover from '../kitUtils/RegionHover';
import RegionClick from '../kitUtils/RegionClick';
import SaveKitForm from '../kitUtils/SaveKitForm';

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
  const [formView, setFormView] = useState(false);

  return (
    <SampleControlContainer>
      <TitleContainer>Options <span onClick={() => setFormView(!formView)}>x</span></TitleContainer>
      { formView ? 
      <SaveKitForm />
      :
      <>
      <SampleColorPicker />
      <RegionCreator />
      <RegionHover />
      <RegionClick />
      </>
      }
    </SampleControlContainer>
  );
};

export default SampleControl;
