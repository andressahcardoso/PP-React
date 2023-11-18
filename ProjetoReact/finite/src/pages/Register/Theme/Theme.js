import {Header, SunTheme, ImgContainer, ImgSun, Title, Themes, Subtitle, ParagrafoImg, ButtonTheme, CheckBoxWrapper, CheckBox, NextPreviousButtons } from "./ThemeStyle"

// Components
import HeaderContainer from "../Header/Header"
import Footer from "../Footer/Footer"

// Images
import SunImg from "../../../assets/Sun.svg"
import SunImg2 from "../../../assets/Sun2.svg"


import { CheckBoxLabel as LightThemes2} from "./ThemeLight"; // Importe os estilos para o tema claro
import { CheckBoxLabel as DarkThemes2 } from "./ThemeDark"

import { useTheme } from '../../../hooks/useTheme';
import { api } from "../../../services/api";
import { useLocation } from "react-router-dom";
import { useState } from "react"

function Theme() {
    const { theme, toggleTheme } = useTheme();

    const [isChecked, setIsChecked] = useState(false);

    const changetoggleTheme = () => {
        setIsChecked(!isChecked);
        // Outras ações relacionadas ao toggle podem ser adicionadas aqui
    };


    // let theme = 0;

    // const location = useLocation();
    // const userInfo = location.state ? location.state.formData : null;

    let darkMode = false;

    const darkTheme = localStorage.getItem('themeColor');
    console.log('darkTheme :', darkTheme);
    if (darkTheme === 'black') {
        darkMode = true
    } else {
        darkMode = false
    }

    const location = useLocation();
    const userInfo = location.state ? location.state.formData : null;

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        console.log('aaaaa', theme)

        const userInfoWithTheme = { ...userInfo, theme: darkMode ? 1 : 0};

        // Envia as informações preenchidas pelo usuário (data) para o endpoint "/user/create" da API.
        console.log('userInfoWithTheme:', userInfoWithTheme);
        await api.post("/user/create", userInfoWithTheme);

    };

    // const [darkMode, setDarkMode] = useState(false);

    // const toggleDarkMode = () => {
    //     setDarkMode(!darkMode);
    // };

    let LabelComponents = LightThemes2

    if (theme.color === 'white') {
        LabelComponents = DarkThemes2;
    } else {
        LabelComponents = LightThemes2;
    }


    return (
        <Themes style={{ background: theme.background, color: theme.color }}> 
            <Header>
                <HeaderContainer firstDiv={false} firstBgc={true} secondDiv={false} secondBgc={true} thirdDiv={true} thirdBgc={false}/> 
            </Header>

            <SunTheme>
                <ImgContainer>
                    <ImgSun src={theme.color === 'white' ? SunImg2 : SunImg} />
                </ImgContainer>

                <Title>Escolha um tema</Title>
                <Subtitle>Claro ou escuro?</Subtitle>
                <ParagrafoImg>Você poderá altera-lo posteriormente</ParagrafoImg>
            </SunTheme>
                
            <ButtonTheme>
                <CheckBoxWrapper onChange={changetoggleTheme}>
                    <CheckBox id="checkbox" type="checkbox" checked={isChecked} onChange={toggleTheme} />
                    <LabelComponents CheckBoxLabel2={true} htmlFor="checkbox" />
                </CheckBoxWrapper>
            </ButtonTheme>

            <NextPreviousButtons onClick={handleFormSubmit}>
                <Footer back="/Register/Forms" next="/Feed"/>
            </NextPreviousButtons>
        </Themes>
    )
}

export default Theme;