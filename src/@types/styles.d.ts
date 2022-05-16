import 'styled-components'

declare module 'styled-components'{
    export interface DefaultTheme{
        title: string,

        colors: {
            primary: string,
            secondary: string,

            background: string,
            backgroundList: string,
            listColor: string,
            checkedListColor: string,
            text: string,
        },
        
        bg: string,
        bgMobile: string,
        
    }
}