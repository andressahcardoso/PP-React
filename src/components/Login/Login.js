import {Header, PreviousButton, WelcomeBack, FormItens, Form, Label, Input, ForgotPassword, LoginButton, EnterWith, TextLine, EnterText, ButtonsContainer, GoogleIcon, GoogleText} from "./styled"
import PreviousImg from "../../assets/previous.png"
import GoogleLogo from "../../assets/google-logo.svg"
import { Link } from 'react-router-dom';

function Login() {

    return (
        <>
            <Header>
                <h1>Logo</h1>
                <Link to="/"><PreviousButton src={PreviousImg} alt="Voltar a Página inicial"/></Link>
            </Header>
       
            <WelcomeBack>
                <h3>Bem vindo(a) de volta!</h3>
            </WelcomeBack>

            <FormItens>
                <Form>
                    <Label for="userName">Nome de usuário ou E-mail</Label>
                    <Input type="text" id="userName" required/>

                    <Label for="password">Senha</Label>
                    <Input type="password" id="password" required/>

                    <ForgotPassword>Esqueceu a senha?</ForgotPassword>

                    <LoginButton>Entrar</LoginButton>
                </Form>
            </FormItens>

            <EnterWith>
                <TextLine>
                    <EnterText>Entrar com</EnterText>
                </TextLine>

                <ButtonsContainer>
                    <GoogleIcon src={GoogleLogo}/>
                    <GoogleText>Google</GoogleText>
                </ButtonsContainer>
            </EnterWith>
        </>
    )
}

export default Login