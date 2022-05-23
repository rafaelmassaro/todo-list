import { ClearButton, Container, CountItems, OptionsArea } from "./styles";

export function Footer(){
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

            <ClearButton>
                Clear Completed
            </ClearButton>
        </Container>
    )
}