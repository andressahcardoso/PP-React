import {Header, SunTheme, ImgContainer, ImgSun, Title, Subtitle, ParagrafoImg, ButtonTheme, CheckBoxWrapper, CheckBox, NextPreviousButtons } from "./ThemeStyle"

// Components
import HeaderContainer from "../Header/Header"
import Footer from "../Footer/Footer"

// Images
import SunImg from "../../../assets/Sun.svg"
import SunImg2 from "../../../assets/Sun2.svg"

import { Themes as LightThemes} from "./ThemeLight"; // Importe os estilos para o tema claro
import { Themes as DarkThemes } from "./ThemeDark"; // Importe os estilos para o tema escuro
import { CheckBoxLabel as LightThemes2} from "./ThemeLight"; // Importe os estilos para o tema claro
import { CheckBoxLabel as DarkThemes2 } from "./ThemeDark"; // Importe os estilos para o tema escuro

import { useState } from "react";


function Theme() {

    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    const ThemeComponents = darkMode ? DarkThemes : LightThemes;
    const LabelComponents = darkMode ? DarkThemes2 : LightThemes2;

    return (
        <ThemeComponents> 
            <Header>
                <HeaderContainer firstDiv={false} firstBgc={true} secondDiv={false} secondBgc={true} thirdDiv={true} thirdBgc={false}/> 
            </Header>

            <SunTheme>
                <ImgContainer>
                    <ImgSun src={darkMode? SunImg2 : SunImg} />
                </ImgContainer>

                <Title>Escolha um tema</Title>
                <Subtitle>Claro ou escuro?</Subtitle>
                <ParagrafoImg>Você poderá altera-lo posteriormente</ParagrafoImg>
            </SunTheme>
                
            <ButtonTheme>
                <CheckBoxWrapper>
                    <CheckBox id="checkbox" type="checkbox" onChange={toggleDarkMode} />
                    <LabelComponents CheckBoxLabel2={true} htmlFor="checkbox" />
                </CheckBoxWrapper>
            </ButtonTheme>

            <NextPreviousButtons>
                <Footer back="/Register/Forms" next="/Feed"/>
            </NextPreviousButtons>
        </ThemeComponents>
    )
}

export default Theme;