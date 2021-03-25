import { useState } from "react";
import { ThemeProvider } from "styled-components";
import styled from 'styled-components';
import Card from './elements/Card';
import Header from './components/Header';
import Separator from './elements/Separator';
import Form from './components/Form';
import themes from './theme';


const Body = styled.div`
    width:100%;
    min-height:100vh;
    background-color: ${props => props.theme.pageBackground};
    display:flex;
    justify-content:center;
    align-items:center;
    padding: 20px;
    transition: all .5s ease;
`;

const App = () => {

    const [theme, setTheme] = useState("light");

    return (

        <ThemeProvider theme={themes[theme]}>
            <Body>
                <Card>
                    <Header theme={theme} setTheme={setTheme} />
                    <Separator />
                    <Form />
                </Card>
            </Body>
        </ThemeProvider>

    );
}


export default App;

