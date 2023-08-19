import {Form, Header, Text, Question, TimeComponent, Time, Component24h, Input, ButtonIncrement, ButtonNum, Week, NextPreviousButtons} from "./FormsStyle"

import React, { useState } from 'react';

// Components
import HeaderContainer from "../Header/Header"
import Footer from "../Footer/Footer";

// Images
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
                    <Input type="number" value={value} />
                    <ButtonIncrement>
                        <ButtonNum onClick={handleIncrease}><img src={Addition} alt="Addition"/></ButtonNum>
                        <ButtonNum onClick={handleDecrease}><img src={Subtraction} alt="Subtraction"/></ButtonNum>
                    </ButtonIncrement>
                    </Component24h>
                </div>

                <div>
                    <Week>Semana</Week>
                    <Component24h>
                    <Input type="number" value={value2} />
                    <ButtonIncrement>
                        <ButtonNum onClick={handleIncrease2}><img src={Addition} alt="Addition"/></ButtonNum>
                        <ButtonNum onClick={handleDecrease2}><img src={Subtraction}  alt="Subtraction"/></ButtonNum>
                    </ButtonIncrement>
                    </Component24h>
                </div>
            </TimeComponent>

            <NextPreviousButtons>
                <Footer back="/Register/User" next="/Register/Theme"/>
            </NextPreviousButtons>
        </Form>
    )
}

export default Forms;
