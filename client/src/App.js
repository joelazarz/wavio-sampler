import { ThemeProvider } from 'styled-components';
import { useDarkMode } from './hooks/useDarkMode';
import { useForm } from './hooks/useForm';
import { lightTheme, darkTheme } from './css/theme';
import { GlobalStyles } from './css/global';

import { Navbar } from './components/layout/Navbar';

function App() {
  const [values, handleChange] = useForm({ username: "", email: "" })

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

        <div style={{marginTop: '3em'}}>
          <input
            name="username"
            value={values.username}
            onChange={handleChange}
          />
          <input
            name="email"
            value={values.email}
            onChange={handleChange}
          />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
