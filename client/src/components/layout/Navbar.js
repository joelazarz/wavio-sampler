import styled from "styled-components";

const Nav = styled.nav`
background-color: ${({ theme }) => theme.nav};
font-family: 'Roboto Mono', monospace;
font-size: 12px;
font-weight: 600;
position: fixed; 
top: 0; 
width: 100%;
display: flex;
justify-content: space-between;
padding: 0.5em;
`;

const ToggleButton = styled.button`
background: transparent;
color: ${({ theme }) => theme.text};
background-color: rgba(255, 255, 255, 0.16);
border-radius: 0.25rem;
border-width: 0;
display: inline-flex;
appearance: none;
-webkit-box-align: center;
align-items: center;
-webkit-box-pack: center;
justify-content: center;
transition: all 250ms ease 0s;
user-select: none;
position: relative;
white-space: nowrap;
vertical-align: middle;
line-height: 1.2;
outline: none;
height: 1.5rem;
min-width: 1.5rem;
font-size: 11px;
background-color: rgba(255, 255, 255, 0.08);
padding: 0px;
`

export const Navbar = ({ toggleTheme }) => {
  return (
    <Nav>
      Wavio Sampler
      <ToggleButton onClick={toggleTheme}>t</ToggleButton>
    </Nav>
  )
}
