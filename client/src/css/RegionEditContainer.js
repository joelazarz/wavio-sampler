import styled from 'styled-components';

export const RegionEditContainer= styled.div`
display: flex;
flex-direction: column;
min-height: 4em;
max-height: 8.5em;
overflow-x: hidden;
overflow-y: scroll;
justify-content: space-between;
background-color: ${({ theme }) => theme.nav};
margin: 0.5em;
border-radius: 0.25em;
`
