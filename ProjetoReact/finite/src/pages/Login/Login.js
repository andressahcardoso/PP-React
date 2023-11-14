import {Header, ImagemLogo, PreviousButton, Div, WelcomeBack, Subtitle, FormItens, Label, Input, ForgotPassword, LoginButton, EnterWith, TextLine, EnterText, GoogleDiv, CenterDiv, ErrorMesaage, ErrorDiv} from "./LoginStyle"

// React Router
import { useNavigate } from 'react-router-dom';
import { useState } from "react";

// Images
import PreviousImg from '../../assets/previous.png';
import Logo from '../../assets/Finite_Logo.svg';
import Logo2 from '../../assets/finite_logo_white.svg'
import { api } from "../../services/api";

// Icons
import { LuAlertTriangle } from 'react-icons/lu';
import { useTheme } from "../../hooks/useTheme";


import { EnterText as LightThemes} from "./ThemeLight.jsx"; // Importe os estilos para o tema claro
import { EnterText as DarkThemes } from "./ThemeDark.jsx"; // Importe os estilos para o tema escuro

import { Label as LightThemes2} from "./ThemeLight.jsx"; // Importe os estilos para o tema claro
import { Label as DarkThemes2 } from "./ThemeDark.jsx"; // Importe os estilos para o tema escuro



function Login() {
    const {theme} = useTheme();

    let darkMode = false;

    const darkTheme = localStorage.getItem('themeColor');
    console.log('darkTheme :', darkTheme);
    if (darkTheme === 'black') {
        darkMode = true
    } else {
        darkMode = false
    }

    const EnterText = darkMode ? DarkThemes : LightThemes;
    const Label = darkMode ? DarkThemes2 : LightThemes2;
    console.log('TextLine :', TextLine);

    // Validação de Login API
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [credentialError, setCredential] = useState('');
    // const [user, setUser] = useState(null);
    // const [error, setError] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();

    if (!email) {
        setEmailError('O E-mail é obrigatório!');
        setCredential('')
    } else {
        setEmailError('');
    }

    if (!password) {
        setPasswordError('A Senha é obrigatória!');
        setCredential('')
    } else {
        setPasswordError('');
    }

    if (email && password) {
      const data = {
        email,
        password,
      }; 
      
      try {
        const response = await api.post('/auth/login', data);
        setCredential('')

        if (response.data.success === true) {
            api.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${response.data.data[0].token}`;

            localStorage.setItem('@Auth:user', JSON.stringify(response.data.data[0].email));
            localStorage.setItem('@Auth:token', response.data.data[0].token);
            localStorage.setItem('@Auth:id', response.data.data[0].id);

            
            const data = new Date();
            
            const horas = data.getHours();
            const minutos = data.getMinutes();
            const segundos = data.getSeconds();
            
            localStorage.setItem('StartTime', `${horas}:${minutos}:${segundos}`);

            navigate('/Feed')
        } else {
            console.log('Erro ao logar usuário!');
        }

      } catch (error) {
        console.error("Erro ao fazer login: ", error);
        setCredential('As credenciais informadas estão incorretas!');
      }
    }
    };


    // Navigate
    const navigate = useNavigate();

    function goToBack() {
        navigate(-1)
    }


    // API - Login Google

    // const handleCallbackResponse = useCallback((response) => {
    //     console.log("Encoded JWT ID token: " + response.credential);
    //     var userObject = jwtDecode(response.credential);
    //     console.log(userObject);
    //     setUser(userObject);
    //     document.getElementById("signInDiv").hidden = true;
    //     navigate('/Feed', { state: userObject });
    // }, [setUser, navigate]);

    // function handleSignOut(event){
    //     setUser({});
    //     document.getElementById("signInDiv").hidden = false;
    // }

    // useEffect(() => {
    //     /* global google */

    //     google.accounts.id.initialize({
    //     client_id: "845408374529-k458dpa08tteoo3circb9fdlr6mb1b3v.apps.googleusercontent.com",
    //     callback: handleCallbackResponse
    //     })

    //     google.accounts.id.renderButton(
    //     document.getElementById("signInDiv"),
    //     {theme: "outline", size: "large"}
    //     )

    //     google.accounts.id.prompt();
    // }, [handleCallbackResponse]);
    
        return (
            <Div style={{ background: theme.background, color: theme.color }}>
                <Header>
                    <ImagemLogo src={darkMode ? Logo2 : Logo}></ImagemLogo>
                    <PreviousButton onClick={goToBack} src={PreviousImg} alt="Voltar a Página inicial"/>
                </Header>
        
                <WelcomeBack>
                    <h2>Olá,</h2>
                    <Subtitle>seja bem vindo(a) de volta!</Subtitle>
                </WelcomeBack>

                <FormItens>
                    <form>
                        {credentialError && 
                            <ErrorDiv>
                                <ErrorMesaage><LuAlertTriangle/> {credentialError}</ErrorMesaage>
                            </ErrorDiv>
                        }
                          
                        <Label for="email">Nome de usuário ou E-mail</Label>
                        <Input type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}/>
                        {emailError && <ErrorMesaage><LuAlertTriangle/> {emailError}</ErrorMesaage>}

                        <Label for="password">Senha</Label>
                        <Input type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}/>   
                        {passwordError && <ErrorMesaage><LuAlertTriangle/> {passwordError}</ErrorMesaage>}
   

                        <ForgotPassword>Esqueceu a senha?</ForgotPassword>

                        <LoginButton onClick={handleSubmit} value="Entrar">Entrar</LoginButton>
                    </form>
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

                        {/* { Object.keys(user).length !== 0 && 
                        <>   */}
                            {/* <Navigate to="/Home" UserTest={user}/> */}
                            {/* <buttonG onClick={(e) => handleSignOut(e)}>Sign Out</buttonG>
                        </>
                        } */}
                        {/* {user && 
                        <div>
                        <img src={user.picture}></img>
                        <h3>{user.name}</h3>
                        </div>  */}

                    </CenterDiv>
                </EnterWith>
            </Div>
        )
    } 

export default Login;