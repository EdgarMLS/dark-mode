import styled from 'styled-components';
import Toggle from './../elements/Toggle';
import { CgMoon, CgSun } from "react-icons/cg";

const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    width:100%;
    margin-bottom:30px
`;

const Title = styled.h1`
    font-weight:bold;
    font-size:20px;
    color: ${props => props.theme.headerTextColor};
    transition: all .5s ease;
`;

const Header = (props) => {

    const changeTheme = () => {
        props.theme === "light" ? props.setTheme("dark") : props.setTheme("light");
    }

    const icon = props.theme === "light" ? <CgMoon size={20} /> : <CgSun size={20} />;

    return (
        <Container>
            <Title>
                Profile
            </Title>
            <Toggle onClick={changeTheme}>
                {icon}
            </Toggle>
        </Container>
    );
}

export default Header;