import { ListProps } from "../../contexts/todocontext"
import { CustomCheckbox } from "../CustomCheckbox"
import { Container } from "./styles"

import iconCross from '../../assets/images/icon-cross.svg';
import { useState } from "react";

interface Props{
    item: ListProps;
    deleteItem: (id: number) => void;
}

export function ListItem({item, deleteItem}:Props){
    const [newItem, setNewItem] = useState<ListProps>(item)


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
                onClick={() => deleteItem(item.id)}
            >
                <img src={iconCross} alt="Icon Cross" />
            </button>
        </Container>
    )
}