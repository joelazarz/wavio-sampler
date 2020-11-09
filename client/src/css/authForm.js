import styled from 'styled-components';

export const AuthForm = styled.form`
grid-row-start: 2;
grid-row-end: 6;
/* height: 30vh; */
grid-column-start: 2;
grid-column-end: 8;
margin: 1rem 1rem;
display: flex;
flex-direction: column;
/* justify-content: center; */
/* place-items: center; */
background-color: rgba(255, 255, 255, 0.2);
border-radius: 0.25rem;
`

export const AuthFormInput = styled.input`
width: 90%;
border: none;
border-radius: 0.25em;
padding: 0.5rem;
background-color: rgba(255, 255, 255, 0.8);
box-shadow: none;
font-family: 'Roboto Mono', monospace;
margin: 0.5rem auto;
`

export const AuthFormButton = styled.input`
width: 50%;
font-family: 'Roboto Mono', monospace;
font-size: 13px;
margin: 0.5rem auto 1rem auto;
border: none;
border-radius: 0.25em;
background-color: rgba(255, 255, 255, 0.6);
`

export const AuthFormLabel = styled.label`
margin: 0.2rem auto 0rem 2rem;
`

export const AuthFormTitle = styled.div`
background-color: rgba(255, 255, 255, 0.2);
border-radius: 0.25em;
padding: 0 4rem;
margin: 0.5rem auto;
font-size: 15px;
`
