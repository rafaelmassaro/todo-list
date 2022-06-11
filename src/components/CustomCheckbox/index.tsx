import { ReactNode, useState, InputHTMLAttributes } from "react";
import { CheckboxContainer, HiddenCheckbox, StyledCheckbox, Text } from "./styles";

import iconCheck from '../../assets/images/icon-check.svg';

interface Props extends InputHTMLAttributes<HTMLInputElement>{
    children: ReactNode;
    checkedItem: boolean;
    completeTodo: () => void;
}

export function CustomCheckbox({ children, checkedItem, completeTodo, ...rest }:Props){
    const [checked, setChecked] = useState(checkedItem);

    function handleCheckboxChange(){
        setChecked(!checked);
        completeTodo();
    }

    return(
        <CheckboxContainer
            checked={checked}
            onClick={handleCheckboxChange}
        >
            <HiddenCheckbox
                onChange={handleCheckboxChange}
                checked={checked}
            />

            <StyledCheckbox
                checked={checked}
            >
                <img src={iconCheck} alt='Icon check' />
            </StyledCheckbox>

            <Text checked={checked}>
                {children}
            </Text>

        </CheckboxContainer>
    )
}