import './style.css';
import styled from 'styled-components';


 const Button = styled.button`
    background:${props =>props.bg};
    width:50%;
    font-weight:500;
    color:#fff;
    margin:2rem auto;
    padding:1rem 2rem;
    transition:all 1s ease;
    border:none;
    border-radius:20px;
    &:hover{
        color:#000;
        background:forestgreen;
    }
 `
export default Button;
