import { createGlobalStyle, DefaultTheme } from "styled-components";

interface GlobalStylesProps {
    theme: DefaultTheme;
}

export const GlobalStyles = createGlobalStyle<GlobalStylesProps>`

/* Montserrat */
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');


body{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    overflow-x: hidden;
    font-family: 'Montserrat', sans-serif;
    background-image: url(../images/bg2.png);
    background-repeat: no-repeat;
    background-size: cover;
}

#root{
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100%;
    padding: .93rem;
}

a{
    text-decoration: none;
}
h1{
    font-size: 2rem;
}
`