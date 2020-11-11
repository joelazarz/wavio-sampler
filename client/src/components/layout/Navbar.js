import { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import AuthContext from '../../context/auth/authContext';

const Nav = styled.nav`
background-color: ${({ theme }) => theme.nav};
font-family: 'Roboto Mono', monospace;
font-size: 12px;
font-weight: 600;
position: fixed; 
top: 0; 
max-height: 2.5rem;
width: 100%;
display: flex;
justify-content: space-between;
padding: 0.5em;
`;

const ToggleButton = styled.button`
background: transparent;
color: ${({ theme }) => theme.text};
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
background-color: rgba(255, 255, 255, 0.2);
padding: 0px;
&:hover {
  background-color: rgba(255, 255, 255, 0.3);
}
`

export const Navbar = ({ toggleTheme }) => {
  const authContext = useContext(AuthContext);

  const { isAuthenticated, logout, user } = authContext;

  const onLogout = () => {
    logout();
  };

  const authLinks = (
    <>
    <span>Hello { user && user.username}</span>
    <a onClick={onLogout} href="#!">
          <span>Logout</span>
        </a>
    </>
  );

  const guestLinks = (
    <>
      <Link to='/register'>Register</Link>
      <Link to='/login'>Login</Link>
    </>
  );

  return (
    <Nav>
      <li>Wavio Sampler</li>
      <div>
      {isAuthenticated ? authLinks : guestLinks}
      </div>
      <ToggleButton onClick={toggleTheme}>t</ToggleButton>
    </Nav>
  )
}
