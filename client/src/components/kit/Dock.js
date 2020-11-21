import React from 'react';
import styled from 'styled-components';
import { TitleContainer } from '../../css/TitleContainer';

const DockContainer = styled.div`
  grid-row-start: 1;
  grid-row-end: 16;
  grid-column-start: 1;
  grid-column-end: 3;
  min-height: 100%;
  background-color: ${({ theme }) => theme.paneBackground};
  margin-top: 1rem;
  border-radius: 6px;
`

const Dock = () => {
  return (
    <DockContainer>
      <TitleContainer>Social</TitleContainer>
    </DockContainer>
  )
};

export default Dock;
