import Input from './../elements/Input';
import Button from './../elements/Button';
import styled from 'styled-components';

const ContainerButtons = styled.div`
    margin-top:30px;
`;

const Form = () => {

    const handlerSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <form onSubmit={handlerSubmit}>
            <Input
                placeholder="Your Name"
            />
            <Input
                placeholder="E-mail"
            />
            <Input
                placeholder="Phone"
            />
            <ContainerButtons>
                <Button
                    type="submit"
                    buttonSubmit
                >
                    Registration
                </Button>
                <Button>
                    Sign In
                </Button>
            </ContainerButtons>
        </form>

    );
}

export default Form;