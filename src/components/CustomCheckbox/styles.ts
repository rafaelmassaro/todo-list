import styled from "styled-components";

interface Props{
    checked: boolean;
}

export const CheckboxContainer = styled.div(({checked}: Props) => (
    `
    width: 100%;
    height: 35px;
    padding-left: 5px;
    margin: 0px 4px;
    cursor: pointer;
    
    display: flex;
    align-items: center;
    `
))
export const HiddenCheckbox = styled.input.attrs({type: 'checkbox'})`
    overflow: hidden;
    white-space: nowrap;width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
`;
export const Text = styled.label(({checked}:Props) => (
   `
    font-size: 20px;
    color: ${checked ? '#fff' : '#555'};
    cursor: pointer;
   ` 
));
export const StyledCheckbox = styled.label(({checked}:Props) => (
    `
    width: 25px;
    height: 25px;
    margin-right: 2.5rem;
    border-radius: 50%;
    background: #F6F6F6;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;



    img {
        display: ${checked ? 'flex' : 'none'};
        filter: invert(75%) sepia(11%) saturate(6042%) hue-rotate(30deg) brightness(105%) contrast(68%);
    }

    `
));