import styled from "styled-components";

export const Container = styled.div`
    background-color: ${props => props.theme.colors.backgroundList};
    border-radius: 0 0 5px 5px;
    border-top: 1px solid ${props => props.theme.colors.checkedListColor};
    padding: 2.5rem 1.7rem;
    height: 3.2rem;
    max-width: 540px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const CountItems = styled.span`
    font-size: 1.5rem;
    color: ${props => props.theme.colors.checkedListColor};
    font-weight: 700;
`

export const ClearButton = styled.button`
    border: 0;
    background-color: transparent;
    font-size: 1.5rem;
    color: ${props => props.theme.colors.buttonText};
    font-weight: 700;
    cursor: pointer;
    transition: color 0.6s;
    
    &:hover{
        color: ${props => props.theme.colors.buttonHover};
    }
`

export const OptionsArea = styled.div`
    display: flex;
    gap: 1.7rem;

    button{
        border: 0;
        background-color: transparent;
        cursor: pointer;
        font-size: 1.6rem;
        font-weight: 700;
        color: ${props => props.theme.colors.buttonText};
        transition: color 0.6s;

        &:hover{
            color: ${props => props.theme.colors.buttonHover};
        }
    }

    @media(max-width: 520px){
        order: 2;
    }
`