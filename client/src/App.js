import { ThemeProvider } from 'styled-components';
import { useDarkMode } from './hooks/useDarkMode';
import { lightTheme, darkTheme } from './css/theme';
import { GlobalStyles } from './css/global';

import { Navbar } from './components/layout/Navbar';

function App() {
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />
  };

  return (
    <ThemeProvider theme={themeMode}>
      <>
      <GlobalStyles />
        <Navbar toggleTheme={toggleTheme} />
      </>
    </ThemeProvider>
  );
};

export default App;
