import React, { memo } from 'react';
import styled from 'styled-components';
import { TitleContainer } from '../../css/TitleContainer';

const DockContainer = styled.div`
  grid-row-start: 1;
  grid-row-end: 6;
  grid-column-start: 1;
  grid-column-end: 3;
  min-height: 95%;
  background-color: ${({ theme }) => theme.paneBackground};
  margin-top: 2rem;
  border-radius: 6px;
`

const Dock = memo(() => {
  return (
    <DockContainer>
      <TitleContainer>Social</TitleContainer>
    </DockContainer>
  )
});

export default Dock;
