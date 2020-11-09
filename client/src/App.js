import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from './hooks/useDarkMode';
import { lightTheme, darkTheme } from './css/theme';
import { GlobalStyles } from './css/global';
import styled from "styled-components";
// componenets
import { Navbar } from './components/layout/Navbar';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Kit from './components/kit/Kit';

function App() {
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />
  };

  const Container = styled.div`
  max-width: 100vw;
  font-family: 'Roboto Mono', monospace;
  font-size: 12px;
  /* min-height: 100vh; */
  margin: 0rem 1rem 1rem 1rem;
  padding: 2.5rem 0rem 0rem 0rem;

  display: grid;
  grid-template-columns: repeat(8, minmax(10px, 1fr));
  grid-template-rows: repeat(8, minmax(10px, 1fr));
  gap: 0px 0px;
  `

  return (
    <ThemeProvider theme={themeMode}>
      <Router>
        <>
        <GlobalStyles />
          <Navbar toggleTheme={toggleTheme} />
          <Container>
            <Switch>
              <Route exact path='/' component={Kit} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/register' component={Register} />
            </Switch>
          </Container>
        </>
      </Router>
    </ThemeProvider>
  );
};

export default App;
