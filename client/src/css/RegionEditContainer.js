import styled from 'styled-components';

export const RegionEditContainer= styled.div`
display: flex;
flex-direction: column;
min-height: 9.5em;
max-height: 8.5em;
overflow-x: hidden;
overflow-y: scroll;
background-color: ${({ theme }) => theme.nav};
padding: 0.4em;
margin: 0.5em;
border-radius: 0.25em;
`
