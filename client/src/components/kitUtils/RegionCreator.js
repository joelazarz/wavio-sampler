import { useContext } from 'react';
import KitContext from '../../context/kit/kitContext';

import {ReactComponent as AddIcon} from '../../css/icons/plus-sign.svg'
import styled from 'styled-components';

const RegionAddContainer = styled.div`
  margin: 10px;
  display: flex;
  place-items: center;
  justify-content: space-between;
  & > svg {
    margin: 0rem 0.2rem;
    height:0.8rem; 
    width: 0.8rem;
    fill: white;
  }
`

const RegionCreator = () => {
  const kitContext = useContext(KitContext);
  const { addRegion, sampleRegions } = kitContext;

  const onClick = () => {
    if(sampleRegions.length === 8) {return;}; 

    const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
    const r = randomBetween(0, 255);
    const g = randomBetween(0, 255);
    const b = randomBetween(0, 255);

    const region = {
      id: `${sampleRegions.length + 1}`,
      start: 0,
      end: 5,
      loop: false,
      color: `rgb(${r}, ${g}, ${b}, 0.4)`,
      attributes: {
        label: "[1]"
      }
    };

    addRegion(region);
  };

  return (
    <RegionAddContainer>
      <span>Add Region:</span>
      <AddIcon onClick={onClick}/>
    </RegionAddContainer>
  )
}

export default RegionCreator
