import {Form, Header, Text, Question, TimeComponent, Time, Component24h, Input, ButtonIncrement, ButtonNum, Week, NextPreviousButtons} from "./FormsStyle"
import React, { useState } from 'react';

// Components
import HeaderContainer from "../Header/Header"
import Footer from "../Footer/Footer";

// Images
import Addition from "../../../assets/Addition.svg"
import Subtraction from "../../../assets/Subtraction.svg"

import { useLocation, useNavigate } from 'react-router-dom';

function Forms() {

    const navigate = useNavigate();

    const location = useLocation();
    const userInfo = location.state ? location.state.formData : null;

    const [value, setValue] = useState("00:00");

    const handleIncrease = () => {
        const novoMinuto = (parseInt(value.split(":")[1]) + 30) % 60; // Adiciona 30 aos minutos e faz com que os minutos permaneçam entre 0 e 59
        let novaHora = 0;
        if (novoMinuto !== 30) {
            novaHora = (parseInt(value.split(":")[0]) + 1) % 24; // Adiciona 1 às horas e faz com que as horas permaneçam entre 0 e 23
        } else {
            novaHora = (parseInt(value.split(":")[0]))
        }
        const novoValor = `${novaHora.toString().padStart(2, '0')}:${novoMinuto.toString().padStart(2, '0')}`;
        setValue(novoValor);
    };
    
    const handleDecrease = () => {
        const novoMinuto = (parseInt(value.split(":")[1]) - 30 + 60) % 60; // Subtrai 30 dos minutos e faz com que os minutos permaneçam entre 0 e 59
        let novaHora = 0;
        if (novoMinuto === 30) {
            novaHora = (parseInt(value.split(":")[0]) - 1 + 24) % 24; // Subtrai 1 das horas e faz com que as horas permaneçam entre 0 e 23
        } else {
            novaHora = (parseInt(value.split(":")[0]))
        }
        const novoValor = `${novaHora.toString().padStart(2, '0')}:${novoMinuto.toString().padStart(2, '0')}`;
        setValue(novoValor);
    };
    

      
    
    const [value2, setValue2] = useState("00:00");

    const handleIncrease2 = () => {
        const novoMinuto = (parseInt(value2.split(":")[1]) + 30) % 60; // Adiciona 30 aos minutos e faz com que os minutos permaneçam entre 0 e 59
        let novaHora = 0;
        if (novoMinuto !== 30) {
            novaHora = (parseInt(value2.split(":")[0]) + 1) % 24; // Adiciona 1 às horas e faz com que as horas permaneçam entre 0 e 23
        } else {
            novaHora = (parseInt(value2.split(":")[0]))
        }
        const novoValor = `${novaHora.toString().padStart(2, '0')}:${novoMinuto.toString().padStart(2, '0')}`;
        setValue2(novoValor);
    };
    
    const handleDecrease2 = () => {
        const novoMinuto = (parseInt(value2.split(":")[1]) - 30 + 60) % 60; // Subtrai 30 dos minutos e faz com que os minutos permaneçam entre 0 e 59
        let novaHora = 0;
        if (novoMinuto === 30) {
            novaHora = (parseInt(value2.split(":")[0]) - 1 + 24) % 24; // Subtrai 1 das horas e faz com que as horas permaneçam entre 0 e 23
        } else {
            novaHora = (parseInt(value2.split(":")[0]))
        }
        const novoValor = `${novaHora.toString().padStart(2, '0')}:${novoMinuto.toString().padStart(2, '0')}`;
        setValue2(novoValor);
    };


    const handleSubmit = async (e) => {
        // Evita que o envio do formulário seja tratado de maneira padrão pelo navegador e faz com que você possa determinar as ações futuras.
        e.preventDefault();

        const { person, name, userName, email, password } = userInfo;

        const data = {
            person,
            name,
            userName,
            email,
            password,
            value,
            value2
        };
        
        console.log('data :', data);
        // Navegar para a segunda tela e passar os dados como argumentos
        navigate('/Register/Theme', { state: { formData: data } });
    };

    return (
        <Form> 
            <Header>
                <HeaderContainer firstDiv={false} firstBgc={true} secondDiv={true} secondBgc={false} thirdDiv={false} thirdBgc={false}/>
            </Header>

            <Text>
                <Question>Quanto tempo você gostaria de passar na plataforma?</Question>
                <p>! Períodos descritos abaixo</p>
            </Text>

            <TimeComponent>
                <div>
                    <Time>24h</Time>
                    <Component24h>
                    <Input type="time" value={value}
                                onChange={(e) => setValue(e.target.value)} />
                    <ButtonIncrement>
                        <ButtonNum onClick={handleIncrease}><img src={Addition} alt="Addition"/></ButtonNum>
                        <ButtonNum onClick={handleDecrease}><img src={Subtraction} alt="Subtraction"/></ButtonNum>
                    </ButtonIncrement>
                    </Component24h>
                </div>

                <div>
                    <Week>Semana</Week>
                    <Component24h>
                    <Input type="time" value={value2} 
                                onChange={(e) => setValue2(e.target.value)}/>
                    <ButtonIncrement>
                        <ButtonNum onClick={handleIncrease2}><img src={Addition} alt="Addition"/></ButtonNum>
                        <ButtonNum onClick={handleDecrease2}><img src={Subtraction}  alt="Subtraction"/></ButtonNum>
                    </ButtonIncrement>
                    </Component24h>
                </div>
            </TimeComponent>

            <NextPreviousButtons onClick={handleSubmit}>
                <Footer back="/Register/User" next="/Register/Theme"/>
            </NextPreviousButtons>
        </Form>
    )
}

export default Forms;
