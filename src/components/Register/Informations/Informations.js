import {Information, TextDescription, TextWelcome, NextPreviousButtons, Title, Subtitle, Paragrafo, TextTitle, Text, Buttons, PreviousButton} from "./styled"

import PreviousImg from "../../../assets/previous.png"

import { Link } from 'react-router-dom';

function Informations() {
    return (
        <Information>
            <TextDescription>
                <Title>Nome</Title>
                <Subtitle>texto texto texto</Subtitle>
                <Paragrafo>texto  inicial sobre a proposta texto texto texto texto
                    texto texto texto texto texto texto texto texto
                    texto texto texto texto texto texto
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