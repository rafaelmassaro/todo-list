import { ReactNode, useState } from "react";
import { CheckboxContainer, HiddenCheckbox, StyledCheckbox, Text } from "./styles";

import iconCheck from '../../assets/images/icon-check.svg';

interface Props{
    children: ReactNode
}

export function CustomCheckbox({ children }:Props){
    const [checked, setChecked] = useState(false);

    function handleCheckboxChange(){
        setChecked(!checked);
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