import { useContext } from 'react';
import KitContext from '../../context/kit/kitContext';

import styled from 'styled-components';
import {ReactComponent as SquareIcon} from '../../css/icons/square.svg'
import {ReactComponent as BlankRegionIcon} from '../../css/icons/blankRegion.svg'
import { TitleContainer } from '../../css/TitleContainer';

const RowContainer = styled.div`
  font-size: 0.7rem;
  display: flex;
  margin: 0em 0.5em;
  padding: 0em 0.5em;
  min-height: 1.5rem;
  max-width: 95%;
  min-width: 95%;
  place-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.nav};
  border-radius: 0.25em;
  & > svg {
    margin: 0rem 0.5rem;
    height:0.8rem; 
    width: 0.8rem;
  }
`

const StatusContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(8, minmax(1rem, 1fr));
  grid-template-rows: 1;
  margin: 0em 0.5em;
  padding: 0em 0.2em;
  min-height: 1.5rem;
  max-height: 1.5rem;
  max-width: 95%;
  min-width: 95%;
  place-items: center;
  background-color: ${({ theme }) => theme.nav};
  border-radius: 0.25em;
  & > svg {
    margin: 0rem 0.5rem;
    height:0.8rem; 
    width: 0.8rem;
  }
`

const RegionBlock = styled.div`
  display: flex;
  grid-row-start: 1;
  min-height: 1rem;
  font-size: 0.5rem;
  width: 1rem;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
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
        <StatusContainer>
          {regionArr.map((r) => {
            if(r === 'x') {
              return;
            }

            return <RegionBlock 
            key={r.id}
            style={{'background-color': `${r.color}`, 'grid-column-start': `${r.id}`}}
            >
              {r.id}
            </RegionBlock>
          })}
        </StatusContainer>
    )
  };

  return (
    // <TitleContainer>
      <RowContainer>
        <span>{hoverRegion ? `Region: [${hoverRegion.id}] ` : '...'}</span>
        <SquareIcon style={{ 'fill': `${hoverRegion.color}` }}/>
      </RowContainer>
    // </TitleContainer>
  )
};

export default RegionHover;
