import {Information, TextDescription, TextWelcome, NextPreviousButtons, Title, Subtitle, Paragrafo, TextTitle, Text, Buttons, PreviousButton} from "./InformationsStyle"

import { Link } from 'react-router-dom';

// Images
import PreviousImg from "../../../assets/previous.png"


function Informations() {
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
                <Link to='/'><PreviousButton src={PreviousImg} alt="Voltar a Página inicial"/></Link>
                <Link to='/Register/User'><Buttons>Prosseguir</Buttons></Link>
            </NextPreviousButtons>
        </Information>  
    )
}

export default Informations