import styled from "styled-components";

export const Container = styled.div`
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &:hover > button{
        opacity: 1;
        visibility: visible;
    }

    & + div{
        border-top: 1px solid ${props => props.theme.colors.checkedListColor};
    }

    button{
        background-color: transparent;
        margin-right: 1.5rem;
        border: none;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
    }

    @media(max-width: 600px){
        button{
            opacity: 1;
            visibility: visible;
        }
    }
`
