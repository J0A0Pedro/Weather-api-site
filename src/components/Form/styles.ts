import styled from "styled-components";


export const Container = styled.div`
    width:35%;
    height:100%;
    margin: auto;
    background-color:#fff;

    display: flex;
    justify-content: center;
    align-items: center;
    
    @media (max-width: 950px){
        width:50%;
    }
    @media (max-width: 550px){
        width: 80%;
    }
    @media (max-width: 400px){
        width: 90%;
    }

`;
export const Input = styled.input`
    width:100%;
    /* margin-bottom:2%; */
    height:2.5em;
    padding:2%;
    border-radius: 4px;
    border:none;

    @media (max-width:300px){
        margin-bottom:5%;
    }
`;

export const Button = styled.button`
    /* background-color: #FCCC74; */
    background-color: #fff;
    color:#969696;
    font-weight:900;
    font-size: 1em;
    border:none;
    border-radius:4px;
    width:15%;
    height:2.5em;


    cursor: pointer;
`;

