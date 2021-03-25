import styled from 'styled-components';

const Input = styled.input`
    width: 100%;
    height: 50px;
    margin: 10px 0;
    padding:10px;
    border-radius:3px;
    box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.2);
    border:none;
    background:${props => props.theme.inputBackground};
    color:${props => props.theme.inputTextColor};
    outline:none;
    transition: all .5s ease;

    &::placeholder {
        color:${props => props.theme.inputPlaceholderColor};
    }
`;

export default Input;