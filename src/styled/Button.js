import styled from "styled-components";

 export const Button = styled.button`
width: 220px;
padding: 10px 18px;
color: white;
border-radius: 5px;
min-width:220px;
background: #000;
border: none;
font-size: 16px;

&:hover{
    background-color: #ad2020;
    border: 3px solid black;
    color: black;
    transition: 0.3s background ease-in;
}
`; 

export const OutlineButton = styled(Button)`
background-color: white;
border: 3px solid black;
color : black;

&:hover{
    background-color: black;
    border: 3px solid transparent;
    color: white;

}
`; 

