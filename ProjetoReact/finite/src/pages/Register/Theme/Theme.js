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
import { useLocation } from "react-router-dom"

import { api } from "../../../services/api";

function Theme() {

    let theme = 0;

    const location = useLocation();
    const userInfo = location.state ? location.state.formData : null;

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        console.log('aaaaa', theme)

        const userInfoWithTheme = { ...userInfo, theme: darkMode ? 1 : 0 };

        // Envia as informações preenchidas pelo usuário (data) para o endpoint "/user/create" da API.
        console.log('userInfoWithTheme:', userInfoWithTheme);
        await api.post("/user/create", userInfoWithTheme);

    };

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
                    <CheckBox id="checkbox" type="checkbox" onChange={toggleDarkMode}/>
                    <LabelComponents CheckBoxLabel2={true} htmlFor="checkbox" />
                </CheckBoxWrapper>
            </ButtonTheme>

            <NextPreviousButtons onClick={handleFormSubmit}>
                <Footer back="/Register/Forms" next="/Feed"/>
            </NextPreviousButtons>
        </ThemeComponents>
    )
}

export default Theme;