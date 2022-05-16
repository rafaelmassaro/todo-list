import styled from "styled-components";

export const Container = styled.header`
    margin: 0 auto;
    width: min(540px, 90%);
    height: 100vh;
`;

export const AreaList = styled.div`
    background-color: ${props => props.theme.colors.backgroundList};
    border-radius: 5px;
`