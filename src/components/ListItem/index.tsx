import { ListProps } from "../../App"
import { CustomCheckbox } from "../CustomCheckbox"
import { Container } from "./styles"

import iconCross from '../../assets/images/icon-cross.svg';
import { useState } from "react";

interface Props{
    item: ListProps;
}

export function ListItem({item}:Props){
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

            <button>
                <img src={iconCross} alt="Icon Cross" />
            </button>
        </Container>
    )
}