import { useContext } from 'react';
import KitContext from '../../context/kit/kitContext';

import styled from 'styled-components';
import { RegionEditContainer } from '../../css/RegionEditContainer';
import {ReactComponent as CloseIcon} from '../../css/icons/close.svg'

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
    & :hover {
      fill: red;
    }
  }
`

const DeleteRegionButton = styled.button`
  font-family: inherit;
  min-height: 1rem;
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
  const kitContext = useContext(KitContext);
  const { clickRegion, clearClickRegion, removeSelectedRegion } = kitContext;

  if(!clickRegion) {
    return <RegionEditContainer />
  };

  return (
    <RegionEditContainer>
      <RowContainer>
        <span>{clickRegion ? `Region: [${clickRegion.id}] ` : '...'}</span>
        <CloseIcon onClick={clearClickRegion}/>
      </RowContainer>
      <RowContainer>
        <DeleteRegionButton onClick={() => removeSelectedRegion(clickRegion.id)}>
          Delete
        </DeleteRegionButton>
      </RowContainer>
      <RowContainer>
        <span>Loop:</span>
        {/* button */}
      </RowContainer>
    </RegionEditContainer>
  )
};

export default RegionClick;
