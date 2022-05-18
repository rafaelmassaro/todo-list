import styled from "styled-components";

interface Props{
    checked: boolean;
}

export const CheckboxContainer = styled.div(({checked}: Props) => (
    `
    height: 3.5rem;
    padding-left: .5rem;
    margin: 0 .4rem;
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
export const Text = styled.label<Props>
   `
    font-size: 1.8rem;
    color: ${props=> props.checked ? props => props.theme.colors.checkedListColor : props => props.theme.colors.listColor};
    cursor: pointer;
    text-decoration: ${props=> props.checked ? 'line-through' : 'initial'};
   `;

export const StyledCheckbox = styled.label<Props>
    `
    width: 2.5rem;
    height: 2.5rem;
    margin-right: 2.5rem;
    border-radius: 50%;
    border: 1px solid ${props => props.checked ? 'transparent' : props => props.theme.colors.checkedListColor};
    background: ${props => props.checked ? 'linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%))' : 'transparent'};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: relative;

    ${props => props.checked === false && `

        &:hover{
            border-radius: 5rem;
            border: 1px solid transparent;
            background: linear-gradient(45deg, hsl(192, 100%, 67%), hsl(280, 87%, 65%)) border-box;
            -webkit-mask:
                linear-gradient(#fff 0 0) padding-box, 
                linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor; 
                    mask-composite: exclude; 
        }

    `}

    

    img {
        display: ${props => props.checked ? 'flex' : 'none'};
    }
    `
;