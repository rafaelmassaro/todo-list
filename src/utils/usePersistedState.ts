import { useState, useEffect, Dispatch, SetStateAction } from 'react';

type Response<T> = [
    T,
    Dispatch<SetStateAction<T>>,
];

function usePersistedState<T>(key: string, initialState: T): Response<T> {
    const [state, setState] = useState(() => {
        const storageTheme = localStorage.getItem(key);

        if(storageTheme){
            return JSON.parse(storageTheme)
        }else{
            return initialState;
        }
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state))
    }, [key, state])

    return [state, setState]
}

export default usePersistedState;