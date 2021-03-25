import styled from 'styled-components';

const Button = styled.button`
    width: 100%;
    height: 50px;
    margin: 5px 0;
    border-radius:3px;
    border:none;
    background: ${props => props.buttonSubmit ? props.theme.buttonBackground : "none"};
    color:${props => props.buttonSubmit ? props.theme.buttonTextBackground : props.theme.buttonBackground};
    transition: all .5s ease;
`;

export default Button;