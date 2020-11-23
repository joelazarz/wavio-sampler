import { useContext } from 'react';
import SampleContext from '../../context/sample/sampleContext';
import { availableId } from '../../utils/availableId';

import {ReactComponent as AddIcon} from '../../css/icons/plus-sign.svg'
import styled from 'styled-components';

const RegionAddContainer = styled.div`
  margin: 7px 10px;
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
  const sampleContext = useContext(SampleContext);
  const { addRegion, sampleRegions } = sampleContext;

  const onClick = () => {
    if(sampleRegions.length === 8) { return; }; 

    let arr = sampleRegions.map(r => r.id);

    const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
    const r = randomBetween(0, 255);
    const g = randomBetween(0, 255);
    const b = randomBetween(0, 255);

    const region = {
      id: `${availableId(arr)}`,
      start: 0,
      end: 4,
      loop: false,
      color: `rgb(${r}, ${g}, ${b}, 0.4)`
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
