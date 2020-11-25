import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// styling
import { lightTheme, darkTheme } from './css/theme';
import { GlobalStyles } from './css/global';
import Container from './css/container'
// components
import { Navbar } from './components/layout/Navbar';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Kit from './components/kit/Kit';
import PrivateRoute from './components/routing/PrivateRoute';
// context & hooks
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from './hooks/useDarkMode';
import AuthState from './context/auth/AuthState';
import KitState from './context/kit/KitState';
import SampleState from './context/sample/SampleState';
import LoopState from './context/loop/LoopState';
import HelpState from './context/help/HelpState';
// setAuthToken
import setAuthToken from './utils/setAuthToken';

if(localStorage.token) {
  setAuthToken(localStorage.token);
};

const App = () => {
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />
  };

  return (
    <AuthState>
      <KitState>
        <SampleState>
          <LoopState>
            <HelpState>
              <ThemeProvider theme={themeMode}>
                <Router>
                  <>
                  <GlobalStyles />
                    <Navbar theme={theme} toggleTheme={toggleTheme} />
                    <Container>
                      <Switch>
                        <PrivateRoute exact path='/' component={Kit} />
                        <Route exact path='/login' component={Login} />
                        <Route exact path='/register' component={Register} />
                      </Switch>
                    </Container>
                  </>
                </Router>
              </ThemeProvider>
            </HelpState>
          </LoopState>
        </SampleState>
      </KitState>
    </AuthState>
  );
};

export default App;
