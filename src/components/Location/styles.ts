import styled from "styled-components";

export const Box_Location = styled.div`
    color:#EDE5E0;
`;



export const Title = styled.h3`

    @media(max-width:350px){
        padding-top:3%;
        padding-right:5%;
        padding-left:5%;
    }
`;
export const Subtitle = styled.h2``;
export const Image = styled.img``;
export const Text = styled.p``;

export const Button = styled.button`
    background-color: #fff;
    border:none;
    font-weight:bold;
    border-radius:6px;
    cursor:pointer;
    padding:5px;
    color:#757575;
    font-size:1rem;
    margin-left:1%;
    margin-top:4%;

    @media(max-width:350px){
        margin-top:20%;
    }

`;


//${(props) => props.color}
