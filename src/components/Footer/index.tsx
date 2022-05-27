import { ClearButton, Container, CountItems, OptionsArea } from "./styles";

interface Props{
    clearCompletedItem: () => void;
}

export function Footer({ clearCompletedItem}:Props){
    
    return(
        <Container>
            <CountItems>
                5 items left
            </CountItems>

            <OptionsArea>
                <button>
                    All
                </button>
                <button>
                    Active
                </button>
                <button>
                    Complete
                </button>
            </OptionsArea>

            <ClearButton
                onClick={clearCompletedItem}
            >
                Clear Completed
            </ClearButton>
        </Container>
    )
}