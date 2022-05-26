import { ListProps, TodoContext } from "../../contexts/todocontext"
import { CustomCheckbox } from "../CustomCheckbox"
import { Container } from "./styles"

import iconCross from '../../assets/images/icon-cross.svg';
import { useContext, useState } from "react";

interface Props{
    item: ListProps;
}

export function ListItem({item}:Props){
    const [newItem, setNewItem] = useState<ListProps>(item)

    const { deleteTodo } = useContext(TodoContext);

    function updateItem(){
        const updatedItem = {
            ...newItem,
            done: !newItem.done,
        }

        setNewItem(updatedItem)
        console.log(updatedItem)
    }

    return(
        <Container>
            <CustomCheckbox updateItem={updateItem}>
                {newItem.name}
            </CustomCheckbox>

            <button
                onClick={() => deleteTodo(item.id)}
            >
                <img src={iconCross} alt="Icon Cross" />
            </button>
        </Container>
    )
}