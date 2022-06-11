import { ListProps, TodoContext } from "../../contexts/todocontext"
import { CustomCheckbox } from "../CustomCheckbox"
import { Container } from "./styles"

import iconCross from '../../assets/images/icon-cross.svg';
import { useContext } from "react";

interface Props{
    item: ListProps;
}

export function ListItem({item}:Props){

    const { deleteTodo, completeTodo } = useContext(TodoContext);


    return(
        <Container>
            <CustomCheckbox checkedItem={item.done} completeTodo={() => completeTodo(item.id)}>
                {item.name}
            </CustomCheckbox>

            <button
                onClick={() => deleteTodo(item.id)}
            >
                <img src={iconCross} alt="Icon Cross" />
            </button>
        </Container>
    )
}