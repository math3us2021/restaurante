import { formControlUnstyledClasses } from "@mui/base";
import styled from "styled-components";

export const List = styled.div`
    justify-content: center;
    text-align: center;
    align-items: center;

    table{
    border-collapse: collapse;
    border-radius: 8px;
    border: 2px solid #fff;
 
    flex-direction: wrap;
    width: 100%;
    height: 100%;
    box-shadow:4px 4px 4px black;
    }

    th{
        opacity: 0.8;
        background: #222;;
        border-radius: 8px;
        border: 2px solid #fff;
        gap: 3rem;
        justify-content: center;
        text-align: center;  
        ;
        
    }

    td{
        border-radius: 20px;
        border: 2px solid #fff;
        width: 350px;
        height: 100%;
        justify-content: center;
    }
`;

export const Add = styled.div`
    background: transparent;
    text-align: center; 
    margin: 1rem;
`;
export const AddUser = styled.div`
    background: transparent;
    text-align: center; 
    margin: 1rem;

    button{
        background: transparent;
        border-radius: 8px;
        width: 250px;
        height: 40px;
    }

    input{
        text-align: center; 
        width: 450px;
        hight: 50px;
        background: #222;
        color: #fff;
        border: 1px solid #fff;
        border-radius: 10px;
        opacity: 0.8;
`;


export const InputPost = styled.div`

align-items: center;
display: flex;
flex-direction: column;
margin: 2%;

input{
    text-align: center; 
    width: 450px;
    hight: 50px;
    margin: 1rem;
    background: #222;
    color: #fff;
    border: 5px solid #fff;
    border-radius: 10px;
    opacity: 0.8;
    
    
}

`;

export const InputPostCliente = styled.div`

input{
    text-align: center;  
    background: #222;
    color: #fff;
    border: 5px solid #fff;
    border-radius: 10px;
    opacity: 0.9,2;   
}

`;