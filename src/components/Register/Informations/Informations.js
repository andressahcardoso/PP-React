import {Information, TextDescription, TextWelcome, NextPreviousButtons, Title, Subtitle, Paragrafo, TextTitle, Text, Buttons, PreviousButton} from "./InformationsStyle"

// React Router
import { useNavigate } from 'react-router-dom';

// Images
import PreviousImg from "../../../assets/previous.png"


function Informations() {

    const navigate = useNavigate();

    function goToBack() {
        navigate('/')
    }

    function goToRegisterUser() {
        navigate('/Register/User')
    }

    return (
        <Information>
            <TextDescription>
                <Title>Finite</Title>
                <Subtitle>Rede Social Orgânica</Subtitle>
                <Paragrafo>Você ja parou para pensar quanto tempo gasta por dia em redes sociais tradicionais? Com a Finite esse controle será muito mais acessivel a você!
                </Paragrafo>
            </TextDescription>

            <TextWelcome>
                <TextTitle>Olá, seja bem vindo(a)!</TextTitle>
                <Text>Antes de iniciar a sua experiência na plataforma iremos realizar algumas configurações de preferência iniciais.</Text>
            </TextWelcome>         

            <NextPreviousButtons>
                <PreviousButton onClick={goToBack} src={PreviousImg} alt="Voltar a Página inicial"/>
                <Buttons onClick={goToRegisterUser}>Prosseguir</Buttons>
            </NextPreviousButtons>
        </Information>  
    )
}

export default Informations