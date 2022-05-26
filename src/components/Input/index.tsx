import { KeyboardEvent, useContext, useState } from "react";
import { TodoContext } from "../../contexts/todocontext";

import { Container } from "./styles";

export function Input(){
    const [newTask, setNewTask] = useState('');

    const {addTodo} = useContext(TodoContext);

    function handleKeyUp(e: KeyboardEvent){

        if(e.code === "Enter" && newTask !== ''){
            
            addTodo(newTask);
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