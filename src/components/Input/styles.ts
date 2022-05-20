import styled from "styled-components";

export const Container = styled.div`
    background-color: ${props => props.theme.colors.backgroundList};
    border-radius: 5px;
    margin: 2.5rem 0;
    padding: 2.5rem 1.7rem;
    height: 3.2rem;
    display: flex;
    align-items: center;

    div{
        width: 2.5rem;
        height: 2.5rem;
        margin-right: 2.5rem;
        border-radius: 50%;
        border: 1px solid ${props => props.theme.colors.checkedListColor};
        background: transparent;
    }

    input{
        flex: 1;
        font-size: 1.8rem;
        color: ${props => props.theme.colors.listColor};
        background-color: transparent;
        border: 0;
        outline: 0;
    }
`