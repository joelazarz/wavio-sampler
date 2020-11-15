import { useContext } from 'react';
import KitContext from '../../context/kit/kitContext';

import styled from 'styled-components';
import { RegionEditContainer } from '../../css/RegionEditContainer';
import {ReactComponent as CloseIcon} from '../../css/icons/close.svg'

const RowContainer = styled.div`
  margin: 2px;
  display: flex;
  width: 100%;
  /* place-items: center; */
  justify-content: space-between;
  & > svg {
    margin: 0rem 0.2rem;
    height:0.8rem; 
    width: 0.8rem;
    fill: white;
    & :hover {
      fill: lightblue;
    }
  }
`

const RegionClick = () => {
  const kitContext = useContext(KitContext);
  const { clickRegion, clearClickRegion } = kitContext;

  if(!clickRegion) {
    return <RegionEditContainer />
  };

  return (
    <RegionEditContainer>
      <RowContainer>
        <span>{clickRegion ? `Region: [${clickRegion.id}] ` : '...'}</span>
        <CloseIcon onClick={clearClickRegion}/>
      </RowContainer>
    </RegionEditContainer>
  )
};

export default RegionClick;
