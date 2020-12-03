import styled from 'styled-components';

export const ContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
  grid-column-start: 1;
  grid-column-end: 9;
  grid-row-start: 1;
  grid-row-end: 17;
  height: 90vh;
  align-items: center;
`

export const ContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  grid-column-start: 9;
  grid-column-end: 17;
  grid-row-start: 1;
  grid-row-end: 17;
  height: 90vh;
  text-align: center;
`

export const AuthForm = styled.form`
display: flex;
width: 65%;
height: 50%;
grid-column-start: 2;
grid-column-end: 9;
margin: 1rem;
flex-direction: column;
background-color: ${({ theme }) => theme.nav};
border-radius: 0.25rem;
justify-content: center;
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

export const AuthFormButton = styled.button`
width: 50%;
height: 30px;
font-family: 'Roboto Mono', monospace;
font-size: 13px;
margin: 0.5rem auto 1rem auto;
border: none;
border-radius: 0.25em;
color: ${({ theme }) => theme.text};
background-color: ${({ theme }) => theme.secondary};
transition: all 250ms ease 0s;
&:hover{
  background-color: rgba(255, 255, 255, 0.2);
}
`

export const AuthFormLabel = styled.label`
margin: 0.2rem auto 0rem 2rem;
`

export const AuthFormTitle = styled.div`
padding: 0 4rem;
margin: 0.5rem auto;
font-size: 20px;
text-decoration: underline;
`
