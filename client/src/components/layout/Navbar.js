import { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import AuthContext from '../../context/auth/authContext';
import {ReactComponent as SunIcon} from '../../css/icons/sun.svg';
import {ReactComponent as MoonIcon} from '../../css/icons/moon.svg';

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
margin-left: 20px;
& > svg {
  height:12px; 
  width:12px;
  }
&:hover {
  background-color: rgba(255, 255, 255, 0.3);
}
`

const NavSpace = styled.div`
  display: flex;
  place-items: center;
`

const AuthButton = styled.button`
  height: 20px; 
  border: none;
  border-radius: 0.25em;
  margin: 3px 5px;
  padding: 3px;
  padding-bottom: 5px;
  font-family: inherit;
  font-size: 11px;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.paneBackground};
  &:hover {
  background-color: rgba(255, 255, 255, 0.3);
  }
  & a {
    color: ${({ theme }) => theme.text};
    text-decoration: none;
  }
`

export const Navbar = ({ toggleTheme, theme }) => {
  const authContext = useContext(AuthContext);

  const { isAuthenticated, logout } = authContext;

  const onLogout = () => {
    logout();
  };

  const authLinks = (
    <AuthButton onClick={onLogout} >
      <span>Logout</span>
    </AuthButton>
  );

  const guestLinks = (
    <>
      <AuthButton><Link to='/register'>Register</Link></AuthButton>
      <AuthButton><Link to='/login'>Login</Link></AuthButton>
    </>
  );

  return (
    <Nav>
      <span>Wavio Sampler</span>
      <NavSpace>
        {isAuthenticated ? authLinks : guestLinks}
        <ToggleButton onClick={toggleTheme}>
          {
            (theme === 'light') ? <MoonIcon style={{'fill': 'midnightblue'}} /> 
            : <SunIcon style={{'fill': 'yellow'}}/>
          }
        </ToggleButton>
      </NavSpace>
    </Nav>
  )
}
