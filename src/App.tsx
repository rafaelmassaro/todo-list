import { ThemeProvider, DefaultTheme } from 'styled-components';

import GlobalStyles from './styles/global';

import { Container } from './App.style';

import usePersistedState from './utils/usePersistedState';

import light from './styles/themes/light';
import dark from './styles/themes/dark';
import { Header } from './components/Header';
import { CustomCheckbox } from './components/CustomCheckbox';

export default function App(){
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const toggleTheme = () => setTheme(theme.title === 'light' ? dark : light)

  console.log( typeof require('./assets/images/bg-desktop-dark.jpg'))

  return(
    <ThemeProvider theme={theme}>
        <Container>
          <Header selectedTheme={theme.title} toggleTheme={toggleTheme} />

          <CustomCheckbox>Item 1</CustomCheckbox>
          <CustomCheckbox>Item 2</CustomCheckbox>
          <CustomCheckbox>Item 3</CustomCheckbox>
        </Container>

        <GlobalStyles />
    </ThemeProvider>
  )
}
