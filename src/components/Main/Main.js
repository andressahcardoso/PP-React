import {MainContainer, MainImage, TextDescription, ButtonLoginRegister, PhoneImg, MainTitle, Logo, Subtitle, Paragrafo, Login, Register} from "./styled";
import PhoneLogo from "../../assets/phone-logo.svg"
import { Link } from 'react-router-dom';
import FiniteIntro from '../../assets/Video/Finite_Intro_1.mp4'
import Finite from '../../assets/Finite_Logo.svg'

function Main() {
    return (
        <MainContainer>
   
            <MainImage src={FiniteIntro} type="video/mp4" width="430" autoPlay></MainImage>
        
            <TextDescription>
                <Logo src={Finite}></Logo>
                <Subtitle>Rede Social Orgânica</Subtitle>
                <Paragrafo>Seja bem-vindo(a) ao Finite, uma plataforma de rede social voltada ao seu bem estar, pensando sempre na sua melhor interação com outros usuários cadastrados.
                </Paragrafo>
            </TextDescription>

            <ButtonLoginRegister>
                <Link to="/Login"><Login>Entrar</Login></Link>
                <Link to='/Register/Informations'><Register>Registre-se</Register></Link>
            </ButtonLoginRegister>
        </MainContainer>  
    )
}

export default Main