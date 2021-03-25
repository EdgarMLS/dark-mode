import styled from 'styled-components';

const Card = styled.div`
    display:flex;
    flex-direction:column;
    flex-grow:1;
    width:100%;
    max-width:500px;
    background: ${props => props.theme.cardBackground};
    box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.5);
    border-radius:5px;
    padding:30px;
    transition: all .5s ease;
`;

export default Card;

