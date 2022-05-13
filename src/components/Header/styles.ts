import styled from "styled-components";

export const Container = styled.div`
    height: 155px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1{
        font-size: 4rem;
        color: white;
        letter-spacing: 2rem;
    }

    button{
        background: transparent;
        border: none;
        cursor: pointer;
        transition: color .7s;

        &:hover{
            opacity: .6;
        }
    }
`