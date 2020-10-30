import styled from "styled-components";

const Nav = styled.nav`
background-color: ${({ theme }) => theme.nav};
position: fixed; 
top: 0; 
width: 100%;
display: flex;
justify-content: space-between;
padding: 0.5em;
`;

export const Navbar = ({ toggleTheme }) => {
  return (
    <Nav>
      NavBar
      <button onClick={toggleTheme}>Toggle Theme</button>
    </Nav>
  )
}
