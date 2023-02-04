import styled from "styled-components";


export const Box_Container = styled.div`
    /* background-color: #fff; */
    /* background-color: #D9AFD9;
    background-image: linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%); */

    border-radius:4px;
    width:50%;
    padding:.5%;
    margin:auto;
    margin-top: 2%;
    
    @media(max-width:800px){
        width:90%;
    }
   

`;
export const Box_Content = styled.div`
    text-align: center;
`;
export const Box_Text = styled.h1`
    font-weight:300;
    color:#ededed;
    @media (max-width: 400px){
        font-size:1.6em;
    }
`;

export const Box_Title = styled.h3`
    font-weight:800;
    font-size:3em;
    color:#f5f5f5;

`;

export const image_content = styled.img`
    width:80px;
   
    /* @media(max-width: 800px){
        width:20%;
    }
    @media(max-width: 500px){
        width:18%;
    } */
`;


