import { ThemeProvider, DefaultTheme } from 'styled-components';

import GlobalStyles from './styles/global';

import { Container, AreaList } from './App.style';

import usePersistedState from './utils/usePersistedState';

import light from './styles/themes/light';
import dark from './styles/themes/dark';
import { Header } from './components/Header';
import { useState } from 'react';
import { ListItem } from './components/ListItem';
import { Input } from './components/Input';
import { Footer } from './components/Footer';

export interface ListProps {
  id: number;
  name: string;
  done: boolean;
}

export default function App(){
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);
  
  const [list, setList] = useState<ListProps[]>([
    {id: 1, name: 'Comprar pão', done: false},
    {id: 2, name: 'Estudar', done: false},
    {id: 3, name: 'Comer', done: false}
  ])

  const toggleTheme = () => setTheme(theme.title === 'light' ? dark : light);

  const addItem = (taskName:string) => {

    // const taskId = list[list.length - 1].id + 1;

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

  return(
    <ThemeProvider theme={theme}>
        <Container>
          <Header selectedTheme={theme.title} toggleTheme={toggleTheme} />

          <Input addItem={addItem} />

          <AreaList>
            {list.map((item) => (
              <ListItem 
                key={item.id} 
                item={item}
                deleteItem={deleteItem} 
              />
            ))}
          </AreaList>
          <Footer />
        </Container>
        <GlobalStyles />
    </ThemeProvider>
  )
}
