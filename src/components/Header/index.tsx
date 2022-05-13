import {Container} from './styles'

import iconSun from '../../assets/images/icon-sun.svg';
import iconMoon from '../../assets/images/icon-moon.svg';

interface Props{
    selectedTheme: string;
    toggleTheme: () => void;
}

export function Header({selectedTheme, toggleTheme}:Props){
    return(
        <Container>
            <h1>TODO</h1>

            <button onClick={toggleTheme}>
                <img src={ selectedTheme === 'light'? iconMoon : iconSun} alt="Icon change theme" />
            </button>
        </Container>
    )
}