import { ThemeProvider, DefaultTheme } from 'styled-components';

import GlobalStyles from './styles/global';

import usePersistedState from './utils/usePersistedState';

import backgroundLight from './assets/images/bg-desktop-light.jpg';
import backgroundDark from './assets/images/bg-desktop-dark.jpg';
import light from './styles/themes/light';
import dark from './styles/themes/dark';

export default function App(){
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const toggleTheme = () => setTheme(theme.title === 'light' ? dark : light)

  return(
    <ThemeProvider theme={theme}>
      <div>
        <GlobalStyles />
        <img src={theme.title === 'light' ? backgroundLight : backgroundDark} alt="background-image" />
        <button onClick={toggleTheme}>Toggle</button>
      </div>
    </ThemeProvider>
  )
}
