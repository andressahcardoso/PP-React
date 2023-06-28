import {MainContainer, MainImage, TextDescription, ButtonLoginRegister, PhoneImg, MainTitle, Title, Subtitle, Paragrafo, Login, Register} from "./styled";
import PhoneLogo from "../../assets/phone-logo.svg"
import { Link } from 'react-router-dom';

function Main() {
    return (
        <MainContainer>
            <MainImage>
                <PhoneImg src={PhoneLogo} alt="Imagem de Celular"/>
                <MainTitle>logo</MainTitle>
            </MainImage>

            <TextDescription>
                <Title>Finite</Title>
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