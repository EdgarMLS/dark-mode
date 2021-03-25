import styled from 'styled-components';

const Toggle = styled.button`
    display:flex;
    justify-content:center;
    align-items:center;
    cursor: pointer;
    height: 40px;
    width: 40px;   
    border-radius: 50%;
    border: none;
    background:  ${props => props.theme.toggleBackground};;
    color:  ${props => props.theme.toggleColor};
    &:focus {
        outline: none;
    }
    transition: all .5s ease;
`;

export default Toggle;