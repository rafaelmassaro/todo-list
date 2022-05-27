import { useState, createContext, ReactNode } from "react";

export type ContextProps = {
    list: ListProps[];
    setList: (list: ListProps[]) => void;
}

export interface ListProps {
    id: number;
    name: string;
    done: boolean;
}

interface ListProviderProps{
    children: ReactNode;
}

export const ListContext = createContext<ContextProps>({} as ContextProps);

export default function ListProvider({children}: ListProviderProps){
    const [list, setList] = useState<ListProps[]>([
        {id: 1, name: 'Comprar pão', done: false},
        {id: 2, name: 'Estudar', done: true},
        {id: 3, name: 'Comer', done: false}
    ]);


    return(
        <ListContext.Provider value={{list, setList}}>
            {children}
        </ListContext.Provider>
    )
}