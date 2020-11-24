import React, { memo } from 'react';
import styled from 'styled-components';
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

const HelpContainer = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.nav};
  height: 26%;
  margin: 4px;
  border-radius: 0.25em;
`

const Dock = memo(() => {

  return (
    <DockContainer>
      <TitleContainer>Social</TitleContainer>
      <SavedRegionsContainer>
        <Header>Saved Regions</Header>
      </SavedRegionsContainer>
      <BrowseKitsContainer>
        <Header>Kits</Header>
      </BrowseKitsContainer>
      <HelpContainer>

      </HelpContainer>
    </DockContainer>
  )
});

export default Dock;
