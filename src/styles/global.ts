import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-size: 62.5%;
        font-family: 'Josefin Sans', sans-serif;
        list-syle: none;
        text-decoration: none;
    }

    body{
        background: ${props => props.theme.colors.background};
        background-image: url(${props => props.theme.bg});
        background-size: 100%;
        background-repeat: no-repeat;
        color: ${props => props.theme.colors.text};
        font-family: sans-serif;
    }

    @media(max-width: 600px) {
        body{
            background-image: url(${props => props.theme.bgMobile});
        }
    }
`