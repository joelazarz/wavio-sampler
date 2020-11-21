import { useState, useContext } from 'react';
import SampleContext from '../../context/sample/sampleContext';
import styled from 'styled-components';
import { keyframes } from 'styled-components';
import { TitleContainer } from '../../css/TitleContainer';
//
import SampleColorPicker from '../kitUtils/SampleColorPicker';
import RegionCreator from '../kitUtils/RegionCreator';
import RegionHover from '../kitUtils/RegionHover';
import RegionClick from '../kitUtils/RegionClick';
import SaveKitForm from '../kitUtils/SaveKitForm';
//
import {ReactComponent as UploadIcon} from '../../css/icons/upload.svg'

const SampleControlContainer = styled.div`
  grid-row-start: 1;
  grid-row-end: 3;
  grid-column-start: 14;
  grid-column-end: 17;
  min-height: 20em;
  margin-top: 1rem;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.paneBackground};
`

const blink = keyframes`
  0% {
    fill: white;
    margin-right: 1px;
    height: 0.8rem; 
    width: 0.8rem;
  }

  50% {
    fill: red;
    margin-right: 0px;
    height: 0.9rem; 
    width: 0.9rem;
  }

  100% {
    fill: white;
    margin-right: 1px;
    height: 0.8rem; 
    width: 0.8rem;
  }
`;

const NotUploadedIcon = styled(UploadIcon)`
  animation: ${blink} 1s ease infinite;
`

const UploadedIcon = styled(UploadIcon)`
  height:0.9rem; 
  width: 0.9rem;
  fill: green;
`

const SampleControl = () => {
  const [formView, setFormView] = useState(false);

  const sampleContext = useContext(SampleContext);
  const { loadedKit } = sampleContext;

  return (
    <SampleControlContainer>
      <TitleContainer>
        <span>Options</span>
        {
          !loadedKit ?
            <NotUploadedIcon onClick={() => setFormView(!formView)} />
          :
          <UploadedIcon />
        }
      </TitleContainer>
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
