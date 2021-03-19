import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root{
    --background: #f0f2f5;
    --red: #E52E4D;
    --blue: #5429CC;

    --blue-light:#6933FF;

    --text-title: #363f5f;
    --text-body: #969cb3;
    --background:#f0f2f5;
    --shape: #FFFFFF;
}
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
} 

//font-size: 16px (Good for Desktops)
//REM -> 1rem = 16px
html { 
    @media (max-width:1080px){
        font-size: 93.75%; //15px -> with % works in case of user preferences for font sizing and what-not
    }
    @media (max-width:720px){
        font-size: 87.5%; //14px
    }
}


body{ 
    background: var(--background);
    -webkit-font-smoothing: antialiased; //better looking fonts
}
body,input,textarea,button{
    font-family: 'Poppins', sans-serif;
    font-weight:400;
}
h1,h2,h3,h4,h5,h6,strong{
    font-weight:600;
    color: var(--red);
}


button {
    cursor: pointer;
}

[disabled]{
    opacity: 0.6;
    cursor: not-allowed;
}
`;
