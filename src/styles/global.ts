import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin:0;
        padding:0;
        outline: none;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }
    body{
        background-color: #21D4FD;
        background-image: linear-gradient(19deg, #21D4FD 0%, #4a0969 100%);
        width:100%;
        min-height:100vh;
        text-align: center;
    }
    body h1{
        color:#f5f5f5;
        font-weight: 600;
    }
`;
