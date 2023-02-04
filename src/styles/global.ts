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
        /* background-color: #0093E9;
        background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%); */

        /* background-color: #D9AFD9;
        background-image: linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%); */

        background-color: #21D4FD;
        background-image: linear-gradient(19deg, #21D4FD 0%, #4a0969 100%);


        width:100%;
        min-height:100vh;
        text-align: center;

        /* background-image: linear-gradient( 135deg, #F05F57 10%, #360940 100%); */
 
        /* background-image: linear-gradient( 135deg, #FD6585 10%, #0D25B9 100%);  */


        /* background-image: linear-gradient(to top, #30cfd0 0%, #330867 100%); */
    }

    body h1{
        color:#f5f5f5;
        font-weight: 600;
    }
`;
