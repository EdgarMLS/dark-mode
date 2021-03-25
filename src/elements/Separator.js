import styled from 'styled-components';

const Separator = styled.hr`
    height: 60px;
    margin-bottom:10px;
    margin-left:-30px;
    margin-right:-30px;
    background: ${props => props.theme.separatorBackground};
    border:none;
    transition: all .5s ease;
`;

export default Separator;