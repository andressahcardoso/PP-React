import {MainContainer, MainVideo, TextDescription, ButtonLoginRegister, Logo, Subtitle, Paragrafo, Login, Register} from "./MainStyle";

// React Router
import { useNavigate } from "react-router"

// Images and video
import FiniteIntro from '../../assets/Video/Finite_Intro_1.mp4'
import Finite from '../../assets/Finite_Logo.svg'

function Main() {

    const navigate = useNavigate()

    function goToLogin() {
        navigate('/Login');
    }

    function goToRegister() {
        navigate('/Register/Informations');
    }

    return (
        <MainContainer>
            <MainVideo src={FiniteIntro} type="video/mp4" width="430" autoPlay></MainVideo>
        
            <TextDescription>
                <Logo src={Finite}></Logo>
                <Subtitle>Rede Social Orgânica</Subtitle>
                <Paragrafo>Seja bem-vindo(a) ao Finite, uma plataforma de rede social voltada ao seu bem estar, pensando sempre na sua melhor interação com outros usuários cadastrados.
                </Paragrafo>
            </TextDescription>

            <ButtonLoginRegister>
                <Login onClick={goToLogin}>Entrar</Login>
                <Register onClick={goToRegister}>Registre-se</Register>
            </ButtonLoginRegister>
        </MainContainer>  
    )
}

export default Main;