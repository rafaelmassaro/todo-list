import { useState, createContext, ReactNode } from "react";

interface ContextProps{
    list: ListProps[];
    addTodo: (todoName: string) => void;
    deleteTodo: (id: number) => void;
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
        {id: 2, name: 'Estudar', done: false},
        {id: 3, name: 'Comer', done: false}
    ])

    function addTodo(taskName:string){
        const updateList = [...list];
        updateList.push({
          id: updateList.length + 1,
          name: taskName,
          done: false,
        });
        setList(updateList);
    }

    function deleteTodo(id: number){
        const newList = list.filter(item => item.id !== id);
        setList(newList);
    }
    

    return(
        <TodoContext.Provider value={{ list, addTodo, deleteTodo }}>
            {children}
        </TodoContext.Provider>
    )
}