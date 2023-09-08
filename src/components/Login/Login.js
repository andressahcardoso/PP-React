import {Header, ImagemLogo, PreviousButton, WelcomeBack, Subtitle, FormItens, Form, Label, Input, ForgotPassword, LoginButton, EnterWith, TextLine, EnterText, GoogleDiv} from "./LoginStyle"

import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';

// Images
import PreviousImg from "../../assets/previous.png"
import Logo from '../../assets/Finite_Logo.svg'

function Login() {

    const [user, setUser] = useState({});
    const navigate = useNavigate();

    function handleCallbackResponse(response){
        console.log("Encoded JWT ID token: " + response.credential);
        var userObject = jwtDecode(response.credential);
        console.log(userObject);
        setUser(userObject);
        document.getElementById("signInDiv").hidden = true;
        navigate('/Home', { state: userObject });
    }

    function handleSignOut(event){
        setUser({});
        document.getElementById("signInDiv").hidden = false;
    }

    useEffect(() => {
        /* global google */

        google.accounts.id.initialize({
        client_id: "845408374529-k458dpa08tteoo3circb9fdlr6mb1b3v.apps.googleusercontent.com",
        callback: handleCallbackResponse
        })

        google.accounts.id.renderButton(
        document.getElementById("signInDiv"),
        {theme: "outline", size: "large"}
        )

        google.accounts.id.prompt();
    }, []);

    return (
        <>
            <Header>
                <ImagemLogo src={Logo}></ImagemLogo>
                <Link to="/"><PreviousButton src={PreviousImg} alt="Voltar a Página inicial"/></Link>
            </Header>
       
            <WelcomeBack>
                <h2>Olá,</h2>
                <Subtitle>seja bem vindo(a) de volta!</Subtitle>
            </WelcomeBack>

            <FormItens>
                <Form>
                    <Label for="userName">Nome de usuário ou E-mail</Label>
                    <Input type="text" id="userName" required/>

                    <Label for="password">Senha</Label>
                    <Input type="password" id="password" required/>

                    <ForgotPassword>Esqueceu a senha?</ForgotPassword>

                    <Link to="/Feed"><LoginButton>Entrar</LoginButton></Link>
                </Form>
            </FormItens>

            <EnterWith>
                {/* <TextLine>
                    <EnterText>Entrar com</EnterText>
                </TextLine>

                <ButtonsContainer>
                    <GoogleIcon src={GoogleLogo}/>
                    <GoogleText>Google</GoogleText>
                </ButtonsContainer> */}

                <TextLine>
                    <EnterText>Entrar com</EnterText>
                </TextLine>

                <GoogleDiv id="signInDiv"></GoogleDiv>

                { Object.keys(user).length !== 0 && 
                <>  
                    {/* <Navigate to="/Home" UserTest={user}/> */}
                    <buttonG onClick={(e) => handleSignOut(e)}>Sign Out</buttonG>
                </>
                }
                {/* {user && 
                <div>
                <img src={user.picture}></img>
                <h3>{user.name}</h3>
                </div>  */}
            </EnterWith>
        </>
    )
}

export default Login;