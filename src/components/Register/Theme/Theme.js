import {Themes, Header, Line, Div, CircleStep, StepConcluedBack, InformationStep, StepConclued, AnimatedBackground, NextPreviousButtons, Button, P, NextButton, SunTheme, ButtonTheme, ImgSun} from "./styled"
import { Link } from "react-router-dom"
import React, { useState } from 'react';
import NextButtonImg from "../../../assets/next.png"
import SunImg from "../../../assets/Sun.svg"

function Theme() {
    return (
        <Themes> 
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
                    <StepConcluedBack>2</StepConcluedBack>
                </CircleStep>
                <InformationStep>Questionário</InformationStep>
            </Div>
            <Div>
                <CircleStep>
                <StepConclued>
                        <AnimatedBackground/><P>3</P><AnimatedBackground />
                    </StepConclued>
                </CircleStep>
                <InformationStep>Tema</InformationStep>
            </Div>    
        </Header>

        <SunTheme>
            <ImgSun src={SunImg} />

            <h2>Escolha um tema</h2>
            <p>Claro ou escuro?</p>
            <p>Você poderá altera-lo posteriormente</p>
        </SunTheme>
            
        <ButtonTheme>
            <button>oi</button>
        </ButtonTheme>

            <NextPreviousButtons>
                <Link to="/Register/Forms"><Button>Voltar</Button></Link>
                <Link to="/"><NextButton src={NextButtonImg} alt="Próxima etapa"/></Link>
            </NextPreviousButtons>
        </Themes>
    )
}

export default Theme