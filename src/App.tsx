import { ThemeProvider, DefaultTheme } from 'styled-components';

import GlobalStyles from './styles/global';

import { Container, AreaList } from './App.style';

import usePersistedState from './utils/usePersistedState';

import light from './styles/themes/light';
import dark from './styles/themes/dark';
import { Header } from './components/Header';
import { useContext } from 'react';
import { ListItem } from './components/ListItem';
import { Input } from './components/Input';
import { Footer } from './components/Footer';

import { ListContext } from './contexts/list';

import ListProvider from './contexts/list';

export default function App(){
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const toggleTheme = () => setTheme(theme.title === 'light' ? dark : light);

  const { list, setList } = useContext(ListContext);

  console.log('CONTEXT LIST', list);

  const addItem = (taskName:string) => {

    const updateList = [...list];
    updateList.push({
      id: updateList.length + 1,
      name: taskName,
      done: false,
    });
    console.log(updateList)
    setList(updateList);
  }

  const deleteItem = (id: number) => {

    const newList = list.filter(item => item.id !== id);

    setList(newList)
    console.log(newList)
    
  }

  const clearCompletedItem = () => {
    const activeItems = list.filter((item) => item.done === false)

    console.log(activeItems)
    console.log(list)

    setList(activeItems);
  }

  return(
    
    <ThemeProvider theme={theme}>
            <ListProvider>
              <Container>
                <Header selectedTheme={theme.title} toggleTheme={toggleTheme} />

                <Input addItem={addItem} />

                <AreaList>
                  {/* {list.map((item) => (
                    <ListItem 
                      key={item.id} 
                      item={item}
                      deleteItem={deleteItem} 
                    />
                  ))} */}
                </AreaList>
                <Footer
                  clearCompletedItem={clearCompletedItem} 
                />
              </Container>
              <GlobalStyles />
            </ListProvider>
      </ThemeProvider>
  )
}
