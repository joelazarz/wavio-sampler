import { useContext } from 'react';
import SampleContext from '../../context/sample/sampleContext';

import styled from 'styled-components';
import { RegionEditContainer } from '../../css/RegionEditContainer';
import {ReactComponent as CloseIcon} from '../../css/icons/close.svg';

const RowContainer = styled.div`
  margin: 4px 10px;
  display: flex;
  width: 100%;
  /* place-items: center; */
  justify-content: space-between;
  & > svg {
    margin: 0rem;
    margin-right: 20px;
    height:0.8rem; 
    width: 0.8rem;
    fill: white;
    &#clear-region :hover {
      fill: red;
    }
  }
`

const DeleteRegionButton = styled.button`
  font-family: inherit;
  max-height: 1rem;
  margin: 0.1rem 6px;
  background-color: slategrey;
  border: none;
  border-radius: 0.25em;
  width: 90%;
  text-align: center;
  &:hover {
    background-color: silver;
  }
`

const RegionClick = () => {
  const sampleContext = useContext(SampleContext);
  const { 
    clickedRegion, 
    clearClickedRegion, 
    removeSelectedRegion,
  } = sampleContext;

  if(!clickedRegion) {
    return <RegionEditContainer />
  };

  return (
    <RegionEditContainer>
      <RowContainer>
        <span>{clickedRegion ? `Region: [${clickedRegion.id}] ` : '...'}</span>
        <CloseIcon id="clear-region" onClick={clearClickedRegion}/>
      </RowContainer>
      <RowContainer>
        <DeleteRegionButton onClick={() => removeSelectedRegion(clickedRegion.id)}>
          Delete
        </DeleteRegionButton>
      </RowContainer>
    </RegionEditContainer>
  )
};

export default RegionClick;
