import { useState, createContext, ReactNode } from "react";

interface ContextProps{
    list: ListProps[];
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

    

    

    return(
        <TodoContext.Provider value={{ list }}>
            {children}
        </TodoContext.Provider>
    )
}