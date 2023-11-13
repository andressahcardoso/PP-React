import {Header, SunTheme, ImgContainer, ImgSun, Title, Themes, Subtitle, ParagrafoImg, ButtonTheme, CheckBoxWrapper, CheckBox, NextPreviousButtons } from "./ThemeStyle"

// Components
import HeaderContainer from "../Header/Header"
import Footer from "../Footer/Footer"

// Images
import SunImg from "../../../assets/Sun.svg"


import { CheckBoxLabel as LightThemes2} from "./ThemeLight"; // Importe os estilos para o tema claro

import { useTheme } from '../../../hooks/useTheme';
import { api } from "../../../services/api";

function Theme() {
    const { theme, toggleTheme } = useTheme();

    // let theme = 0;

    // const location = useLocation();
    // const userInfo = location.state ? location.state.formData : null;

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const userInfoWithTheme = 1;

        // Envia as informações preenchidas pelo usuário (data) para o endpoint "/user/create" da API.
        console.log('userInfoWithTheme:', userInfoWithTheme);
        await api.post("/user/create", userInfoWithTheme);

    };

    // const [darkMode, setDarkMode] = useState(false);

    // const toggleDarkMode = () => {
    //     setDarkMode(!darkMode);
    // };

    const LabelComponents = LightThemes2;

    return (
        <Themes style={{ background: theme.background, color: theme.color }}> 
            <Header>
                <HeaderContainer firstDiv={false} firstBgc={true} secondDiv={false} secondBgc={true} thirdDiv={true} thirdBgc={false}/> 
            </Header>

            <SunTheme>
                <ImgContainer>
                    <ImgSun src={SunImg} />
                </ImgContainer>

                <Title>Escolha um tema</Title>
                <Subtitle>Claro ou escuro?</Subtitle>
                <ParagrafoImg>Você poderá altera-lo posteriormente</ParagrafoImg>
            </SunTheme>
                
            <ButtonTheme>
                <CheckBoxWrapper>
                    <CheckBox id="checkbox" type="checkbox" onChange={toggleTheme}/>
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