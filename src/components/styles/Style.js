import styled from 'styled-components';
import { Link } from 'react-router-dom';


const colors = {
    primary:  '#2e89f6',
    form: ' #0e2c4f' 
    
}
export const StyledLink = styled(Link)`
    color: black;
    text-decoration: none;

`

export const Container = styled.div`
    width: 40%;
    height: 40%;
    margin: 200px auto;
    background-color: ${colors.primary};
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    border: 1px solid grey;
    border-radius: 20px;
    box-shadow: 5px 5px 5px black;
    h1{
        font-family: "Lucida Console", "Courier New", monospace;
    }
    @media (max-width:1023px){
        width:60%;
        height:40%;
    }
    @media (max-width: 812px){
        width:90%;
    }

`
export const FormContainer = styled.div`
    background-color: #fff;//${colors.form};
    width: 60%;
    height: 50%;
    margin-left: auto;
    margin-right: auto;
    border:1px solid black;
    border-radius: 20px;
    box-shadow: 5px 5px 5px black;
    @media (max-width:1023px){
        width:70%;
        height:50%
    }
`  

export const Form = styled.form`
    margin-left: auto;
    margin-right: auto;
    padding: 10px;
`

export const FormButton = styled.button`
    width: 25%;
    height: 30px;
    margin-top: 10px;
    margin-bottom: 1px;
    background: white;
    border: 1px solid ${colors.primary};
    border-radius: 15px;
    margin-left:10px;
    cursor:pointer;
    @media (min-width:1024px){
        font-size: 16px;
    }
    @media (max-width:1023px){
        width:40%;
    }
    &:hover{
        background-color:  #96c5ff;
    }
`

export const FormInput = styled.div`
    display:flex;
    justify-content:center;
    margin-top: 10px;
    input{
        height: 30px;
        margin-left: 10px;
        border-top: 0px;
        border-left: 0px;
        border-right: 0px;
        border-bottom: 2px solid  #897cfa ;   
        font-size: 16px; 
    }
    input:focus{
        outline: none
    }
    
`

