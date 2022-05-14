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
    border: 1px solid white;
    background: ${checked ? 'linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%))' : 'transparent'};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: relative;

    &:hover{
        border-radius: 50px;
        border: 1px solid transparent;
        background: linear-gradient(45deg,hsl(192, 100%, 67%), hsl(280, 87%, 65%)) border-box;
        -webkit-mask:
            linear-gradient(#fff 0 0) padding-box, 
            linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor; 
                mask-composite: exclude; 
    }

    img {
        display: ${checked ? 'flex' : 'none'};
    }

    `
));