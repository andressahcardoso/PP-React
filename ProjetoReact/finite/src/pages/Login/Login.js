import {Header, ImagemLogo, PreviousButton, WelcomeBack, Subtitle, FormItens, Label, Input, ForgotPassword, LoginButton, EnterWith, TextLine, EnterText, GoogleDiv, CenterDiv} from "./LoginStyle"

// React Router
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { useContext } from "react";

// AuthContext
import { AuthContext } from "../../context/AuthContext";

// Images
import PreviousImg from '../../assets/previous.png';
import Logo from '../../assets/Finite_Logo.svg';
import { api } from "../../services/api";
import { useHomeRedirect } from "../../hooks/useHomeRedirect";

function Login() {

    // Validação de Login API
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState(null);
    const [error, setError] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const data = {
        email,
        password,
      }; 
      
      try {
        const response = await api.post('/auth/login', data);

        if (response.data.success === true) {
            api.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${response.data.data[0].token}`;

            localStorage.setItem('@Auth:user', JSON.stringify(response.data.data[0].email));
            localStorage.setItem('@Auth:token', response.data.data[0].token);
            setUser(response.data.data[0]);

            navigate('/Feed')
        } else {
            setError('Erro ao logar usuário!');
        }

      } catch (error) {
        console.error("Erro ao fazer login: ", error);
        setError('Erro ao logar usuário!');
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
    
    const {authenticated} = useContext(AuthContext);
    useHomeRedirect(authenticated)

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
                    <form>
                          
                        <Label for="email">Nome de usuário ou E-mail</Label>
                        <Input type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}/>

                        <Label for="password">Senha</Label>
                        <Input type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}/>      

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
            </>
        )
    } 

export default Login;