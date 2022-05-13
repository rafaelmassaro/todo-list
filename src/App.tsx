import { ThemeProvider, DefaultTheme } from 'styled-components';

import GlobalStyles from './styles/global';

import { Container } from './App.style';

import usePersistedState from './utils/usePersistedState';

import light from './styles/themes/light';
import dark from './styles/themes/dark';
import { Header } from './components/Header';

export default function App(){
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const toggleTheme = () => setTheme(theme.title === 'light' ? dark : light)

  console.log( typeof require('./assets/images/bg-desktop-dark.jpg'))

  return(
    <ThemeProvider theme={theme}>
        <Container>
          <Header selectedTheme={theme.title} toggleTheme={toggleTheme} />
        </Container>

        <GlobalStyles />
    </ThemeProvider>
  )
}
