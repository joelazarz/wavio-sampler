import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from './hooks/useDarkMode';
import { lightTheme, darkTheme } from './css/theme';
import { GlobalStyles } from './css/global';
import Container from './css/container'
// componenets
import { Navbar } from './components/layout/Navbar';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Kit from './components/kit/Kit';

const App = () => {

  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />
  };

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
