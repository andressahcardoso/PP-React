import {Header, ImagemLogo, PreviousButton, WelcomeBack, Subtitle, FormItens, Label, FormStyle, FormStyled, Input, ForgotPassword, LoginButton, EnterWith, TextLine, EnterText, GoogleDiv, CenterDiv} from "./LoginStyle"

// React Router
import { useNavigate } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';

// Axios
import Axios from 'axios';
import axios from "axios";

// Formik
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';

// Images
import PreviousImg from '../../assets/previous.png';
import Logo from '../../assets/Finite_Logo.svg';

function Login() {

    // Login BD

    const handleClickLogin = (values) => {
        Axios.post("http://localhost:3001/login", {
            email: values.email,
            password: values.password,
          }).then((response) => {
            alert(response.data.msg);
          });
    };

    const validationLogin = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().min(8).required(),
    });



    const [user, setUser] = useState({});
    const navigate = useNavigate();

    function goToBack() {
        navigate(-1)
    }

    function goToFeed() {
        navigate('/Feed')
    }

     // Validação de Login API

     const [email, setEmail] = useState('')
     const [password, setPassword] = useState('')
 
     const saveUserInfoLocalStorage = (token) => {
         localStorage.setItem('email', email)
         localStorage.setItem('token', token)
     }
 
     console.log(email)
     console.log(password)
 
     const handleSubmit = (e) =>{
         e.preventDefault()
 
         const credentials = {email, password}
 
         axios.post('http://localhost:8000/login', credentials, {
             headers:{
                 'Content-Type': 'application/json', 
             },
         })
         .then(response =>{
             alert(response.data.message)
             saveUserInfoLocalStorage(response.data.token)
             navigate('/Feed')
         })
         .catch(error => console.log(error))
 
     }
 


    // API - Login Google

    const handleCallbackResponse = useCallback((response) => {
        console.log("Encoded JWT ID token: " + response.credential);
        var userObject = jwtDecode(response.credential);
        console.log(userObject);
        setUser(userObject);
        document.getElementById("signInDiv").hidden = true;
        navigate('/Feed', { state: userObject });
    }, [setUser, navigate]);

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
    }, [handleCallbackResponse]);

    return (
        <>
            <Header>
                <ImagemLogo src={Logo}></ImagemLogo>
                <PreviousButton onClick={goToBack} src={PreviousImg} alt="Voltar a Página inicial"/>
            </Header>
       
            <WelcomeBack>
                <h2>Olá,</h2>
                <Subtitle>seja bem vindo(a) de volta!</Subtitle>
            </WelcomeBack>

            <FormItens>
                <Formik 
                    initialValues={{}}
                    onSubmit={handleClickLogin} 
                    validationSchema={validationLogin}
                >
                    <FormStyled>
                        
                        <Label for="email">Nome de usuário ou E-mail</Label>
                        <Input id="email" name="email" placeholder="E-mail"/>
                        <ErrorMessage component="span" name="email"/>

                        <Label for="password">Senha</Label>
                        <Input id="password" name="password" required placeholder="Senha"/>
                        <ErrorMessage component="span" name="password"/>

                        <ForgotPassword>Esqueceu a senha?</ForgotPassword>

                        <LoginButton type="submit" value="Entrar">Entrar</LoginButton>

                    </FormStyled>
                </Formik>
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

                <CenterDiv>

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

                </CenterDiv>
            </EnterWith>
        </>
    )
}

export default Login;