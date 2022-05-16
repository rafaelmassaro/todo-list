import { ListProps } from "../../App"
import { CustomCheckbox } from "../CustomCheckbox"
import { Container } from "./styles"


interface Props{
    item: ListProps
}

export function ListItem({item}:Props){
    return(
        <Container>
            <CustomCheckbox>
                {item.name}
            </CustomCheckbox>

            <button>Excluir</button>
        </Container>
    )
}