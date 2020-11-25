import React, { useEffect, useContext, memo } from 'react';
import SampleContext from '../../context/sample/sampleContext';
import styled from 'styled-components';
import {ReactComponent as LoadIcon} from '../../css/icons/load-arrow.svg'
import { TitleContainer } from '../../css/TitleContainer';

const DockContainer = styled.div`
  grid-row-start: 1;
  grid-row-end: 6;
  grid-column-start: 1;
  grid-column-end: 4;
  min-height: 95%;
  background-color: ${({ theme }) => theme.paneBackground};
  margin-top: 2rem;
  border-radius: 6px;
`

const Header = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.nav};
  margin: 3px;
  padding: 3px;
  justify-content: center;
  border-radius: 0.25em;
  & > svg {
    margin: 3px 5px;
    height:0.8rem; 
    width: 0.8rem;
    fill: white;
  }
`

const SavedRegionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.body};
  height: 33%;
  margin: 4px;
  border-radius: 0.25em;
`

const BrowseKitsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.body};
  height: 33%;
  margin: 4px;
  border-radius: 0.25em;
`

const DockRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2px 3px;
  margin: 4px;
  background-color: ${({ theme }) => theme.nav};
  font-size: 11px;
  border-radius: 0.25em;
  & > svg {
    margin: 3px 5px;
    height:0.8rem; 
    width: 0.8rem;
    fill: white;
  }
  &:hover{
    background-color: rgba(255, 255, 255, 0.2);
  }
`

const HelpContainer = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.nav};
  height: 26%;
  margin: 4px;
  border-radius: 0.25em;
`

const Dock = memo(() => {
  const sampleContext = useContext(SampleContext);
  const { 
    getKits, 
    dbKits, 
    loadedKit, 
    kitRegions, 
    loadKit, 
    addRegion, 
    ejectSample 
  } = sampleContext;

  useEffect(() => {
    getKits();
    // eslint-disable-next-line
  }, []);

  const handleLoad = id => {
    ejectSample();
    loadKit(id);
  };

  return (
    <DockContainer>
      <TitleContainer>Social</TitleContainer>
      <SavedRegionsContainer>
        <Header>Saved Regions</Header>
        {!loadedKit ? <></> : kitRegions.map(r => 
          <DockRow 
          key={r.id} 
          onClick={() => addRegion(`${r.start}`, `${r.end}`)}>
            {r.name}
            <LoadIcon key={r.id}/>
          </DockRow>
        )}
      </SavedRegionsContainer>
      <BrowseKitsContainer>
        <Header>Kits</Header>
        {!dbKits ? <></> : dbKits.map(kit => 
          <DockRow 
          key={kit.id} 
          onClick={() => handleLoad(kit.id)}>
            {kit.name}
            <LoadIcon key={kit.id}/>
          </DockRow>
        )}
      </BrowseKitsContainer>
      <HelpContainer>

      </HelpContainer>
    </DockContainer>
  )
});

export default Dock;
