import { KeyboardEvent, useState } from "react";

import { Container } from "./styles";

interface Props {
    addItem: (task:string) => void;
}

export function Input({addItem}: Props){
    const [newTask, setNewTask] = useState('');

    function handleKeyUp(e: KeyboardEvent){

        if(e.code == "Enter" && newTask !== ''){
            
            addItem(newTask);
            setNewTask('');
        }

    }

    return(
        <Container>
            <div></div>
            <input 
                placeholder="Create a new todo..." 
                type="text"
                value={newTask}
                onChange={e => setNewTask(e.target.value)}
                onKeyUp={handleKeyUp}
            />
        </Container>
    )
}