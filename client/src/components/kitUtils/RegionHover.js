import { useContext, useEffect } from 'react';
import KitContext from '../../context/kit/kitContext';

import styled from 'styled-components';
import {ReactComponent as SquareIcon} from '../../css/icons/square.svg'
import {ReactComponent as BlankRegionIcon} from '../../css/icons/blankRegion.svg'
import { TitleContainer } from '../../css/TitleContainer';

const RowContainer = styled.div`
  display: flex;
  min-height: 1.5rem;
  width: 100%;
  place-items: center;
  justify-content: space-between;
  & > svg {
    margin: 0rem 0.5rem;
    height:0.8rem; 
    width: 0.8rem;
  }
`

const RegionHover = () => {
  const kitContext = useContext(KitContext);
  const { hoverRegion, sampleRegions } = kitContext;

  let regionArr = [];

  const regionSpaceDisplay = (sampleRegions) => {
    if(sampleRegions.length === 0) { return; };

    for (let i = 0; i < 8; i++) {
      if (!sampleRegions[i]) {
        regionArr.push('x')
      } else {
        regionArr.splice(i, 0, sampleRegions[i]);
      } 
    };
    return regionArr;
  };
  
  if(!hoverRegion) {
    regionSpaceDisplay(sampleRegions);
    return (
      <TitleContainer>
        <RowContainer style={{'padding': '0rem 0.1rem', 'justifyContent': 'center'}}>
          {regionArr.map((r) => {
            if(r === 'x') {
              return <BlankRegionIcon style={{'margin': '0em 0.1em', 'width': '0.8rem', 'fill': 'transparent'}} />
            }

            return <SquareIcon 
            key={r.id}
            style={{'margin': '0em 0.1em', 'fill': `${r.color}`}}
            />
          })}
        </RowContainer>
      </TitleContainer>
    )
  };

  return (
    <TitleContainer>
      <RowContainer>
        <span>{hoverRegion ? `Region: [${hoverRegion.id}] ` : '...'}</span>
        <SquareIcon style={{ 'fill': `${hoverRegion.color}` }}/>
      </RowContainer>
    </TitleContainer>
  )
};

export default RegionHover;
