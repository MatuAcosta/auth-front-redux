import styled from 'styled-components';
import { Link } from 'react-router-dom';


const colors = {
    primary:  '#a20aff' 
}
export const StyledLink = styled(Link)`

    color: black;
    text-decoration: none;

`


export const FormContainer = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
    background-color: ${colors.primary} ; 
    margin: 2%;
    width:96%;
    height: 100% ;
`


export const Form = styled.form`
    width: 50%;
    height:50%;
    display:inline-block;
    background: #b5b3b7;
    border-radius: 10px;
    border: 1px solid black;
    h1 {
        display:flex;
        justify-content:center;
    }
`

export const FormButton = styled.button`
    width: 20%;
    height: 30px;
    margin-top: 10px;
    background: white;
    border: 1px solid ${colors.primary};
    border-radius: 15px;
    margin-left:10px;
    cursor:pointer;
`

export const FormInput = styled.div`
    display:flex;
    justify-content:center;
    margin-top: 10px;
    input{
        margin-left: 10px;
        
    }
    &:placeholder{
        color: black;
    }
    
`

