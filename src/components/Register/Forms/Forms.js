import {Form, Header, Line, Div, CircleStep, StepConclued, InformationStep, Step, NextPreviousButtons, Button, NextButton, Component24h, ButtonIncrement, Text, Question, Time, TimeComponent, Input, ButtonNum, Week, AnimatedBackground, P, StepConcluedBack} from "./styled"
import { Link } from "react-router-dom"
import React, { useState } from 'react';
import NextButtonImg from "../../../assets/next.png"
import Addition from "../../../assets/Addition.svg"
import Subtraction from "../../../assets/Subtraction.svg"


function Forms() {

      
    const [value, setValue] = useState(0);
        
    const handleIncrease = () => {
        setValue(value + 1);
    };
        
    const handleDecrease = () => {
        setValue(value - 1);
    };


    const [value2, setValue2] = useState(0);
        
    const handleIncrease2 = () => {
        setValue2(value2 + 1);
    };
        
    const handleDecrease2 = () => {
        setValue2(value2 - 1);
    };

    
    
   
    return (
        <Form> 
        <Header>
            <Line></Line>
            <Div>
                <CircleStep>
                    <StepConcluedBack>1</StepConcluedBack>
                </CircleStep>
                <InformationStep>Informações</InformationStep>
            </Div>
            <Div>
                <CircleStep>
                    <StepConclued>
                        <AnimatedBackground/><P>2</P><AnimatedBackground />
                    </StepConclued>
                </CircleStep>
                <InformationStep>Questionário</InformationStep>
            </Div>
            <div>
                <CircleStep>
                    <Step>3</Step>
                </CircleStep>
                <InformationStep>Tema</InformationStep>
            </div>    
        </Header>

    

        <Text>
            <Question>Quanto tempo você gostaria de passar na plataforma?</Question>
            <p>! Períodos descritos abaixo</p>
        </Text>

        <TimeComponent>

       <div>
            <Time>24h</Time>
            <Component24h>
            <Input type="number" value={value} />
            <ButtonIncrement>
                <ButtonNum onClick={handleIncrease}><img src={Addition}/></ButtonNum>
                <ButtonNum onClick={handleDecrease}><img src={Subtraction}/></ButtonNum>
            </ButtonIncrement>
            </Component24h>
        </div>

        <div>
            <Week>Semana</Week>
            <Component24h>
            <Input type="number" value={value2} />
            <ButtonIncrement>
                <ButtonNum onClick={handleIncrease2}><img src={Addition}/></ButtonNum>
                <ButtonNum onClick={handleDecrease2}><img src={Subtraction}/></ButtonNum>
            </ButtonIncrement>
            </Component24h>
        </div>

        </TimeComponent>

        <NextPreviousButtons>
            <Link to="/Register/User"><Button>Voltar</Button></Link>
            <Link to="/Register/Theme"><NextButton src={NextButtonImg} alt="Próxima etapa"/></Link>
        </NextPreviousButtons>
        </Form>
    )
}

export default Forms
