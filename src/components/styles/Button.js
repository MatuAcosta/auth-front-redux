import styled from "styled-components";

export const Button = styled.button`
    background: white;
    font-size: 1em;
    margin: 1em;
    padding: 4px 12px;
    border: 1px solid #09f;
    border-radius: 5px;
    cursor:pointer;
    transition: all .3 ease;
    ${props => props.variant === 'bold' ? 'font-weight: bold' : '' };
    &:hover {
        background: #09f;
    }

`