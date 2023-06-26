import {Form, Header, Line, Div, CircleStep, StepConclued, InformationStep, Step, NextPreviousButtons, Button, NextButton, Component24h, ButtonIncrement, Text, Question, Time, TimeComponent} from "./styled"
import { Link } from "react-router-dom"
import React, { useState } from 'react';
import NextButtonImg from "../../../assets/next.png"



function Forms() {

      
            const [value, setValue] = useState(0);
        
            const handleIncrease = () => {
            setValue(value + 1);
            };
        
            const handleDecrease = () => {
            setValue(value - 1);
        }
    
   
    return (
        <Form> 
        <Header>
            <Line></Line>
            <Div>
                <CircleStep>
                    <StepConclued>1</StepConclued>
                </CircleStep>
                <InformationStep>Informações</InformationStep>
            </Div>
            <Div>
                <CircleStep>
                    <StepConclued>2</StepConclued>
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

        <TimeComponent>

        <Text>
            <Question>Quanto tempo você gostaria de passar na plataforma?</Question>
            <p>! Períodos descritos abaixo</p>
        </Text>


       <div>
            <Time>24h</Time>
            <Component24h>
            <input type="number" value={value} />
            <ButtonIncrement>
                <button onClick={handleDecrease}>-</button>
                <button onClick={handleIncrease}>+</button>
            </ButtonIncrement>
            </Component24h>
        </div>

        </TimeComponent>

        <NextPreviousButtons>
            <Link to="/Register/User"><Button>Voltar</Button></Link>
            <Link to=""><NextButton src={NextButtonImg} alt="Próxima etapa"/></Link>
        </NextPreviousButtons>
        </Form>
    )
}

export default Forms
