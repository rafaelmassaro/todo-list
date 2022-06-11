import { useState, createContext, ReactNode } from "react";

interface ContextProps{
    list: ListProps[];
    addTodo: (todoName: string) => void;
    deleteTodo: (id: number) => void;
    completeTodo: (id: number) => void;
}

interface ProviderProps{
    children: ReactNode;
}

export interface ListProps {
    id: number;
    name: string;
    done: boolean;
}

export const TodoContext = createContext({} as ContextProps);

export default function TodoContextProvider({children}: ProviderProps){
    const [list, setList] = useState<ListProps[]>([
        {id: 1, name: 'Comprar pão', done: false},
        {id: 2, name: 'Estudar', done: true},
        {id: 3, name: 'Comer', done: false}
    ])

    function addTodo(todoName: string){
        const updateList = [...list];
        updateList.push({
          id: list.length + 1,
          name: todoName,
          done: false,
        });
        setList(updateList);
    }

    function deleteTodo(id: number){
        const newList = list.filter(item => item.id !== id);
        setList(newList);
    }

    function completeTodo(id: number){
        const newList = list.map(item => {
            if(item.id === id){
                return {...item, done: !item.done}
            }
            return item;
        })
        
        

        setList(newList);
    }
    

    return(
        <TodoContext.Provider value={{ list, addTodo, deleteTodo, completeTodo }}>
            {children}
        </TodoContext.Provider>
    )
}