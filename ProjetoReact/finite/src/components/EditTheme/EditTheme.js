import {Header, ImgContainer, ImgSun, SunTheme, Title, Subtitle, ParagrafoImg, ButtonTheme, CheckBoxWrapper, CheckBox, NextPreviousButtons } from "../../pages/Register/Theme/ThemeStyle"
import { HeaderComponent, DivBtn, Btn, Themes, DivTheme } from "./style";

// Images
import SunImg from "../../assets/Sun.svg"
import SunImg2 from "../../assets/Sun2.svg"


import { CheckBoxLabel as LightThemes2} from "../../pages/Register/Theme/ThemeLight"; // Importe os estilos para o tema claro

import { useTheme } from '../../hooks/useTheme';
import { useNavigate } from "react-router-dom";

// Icons
import previous from '../../assets/Icons/backIcon.svg'

function EditTheme() {
    const { theme, toggleTheme } = useTheme();
    const navigate = useNavigate();

    function goToSettings() {
        navigate('/Config')
    }

    function goToBack() {
        navigate(-1)
    }

    function goToUser() {
        navigate(-1)
    }

    // let theme = 0;

    // const location = useLocation();
    // const userInfo = location.state ? location.state.formData : null;

 
    // const [darkMode, setDarkMode] = useState(false);

    // const toggleDarkMode = () => {
    //     setDarkMode(!darkMode);
    // };

    const LabelComponents = LightThemes2;

    return (
        <Themes style={{ background: theme.background, color: theme.color }}> 
        
         <HeaderComponent>
                <h2>Alterar tema</h2>
                <img onClick={goToBack} src={previous} alt="Back"></img>
            </HeaderComponent>
           
           
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
            

            <DivBtn>
                <Btn onClick={goToUser}>Salvar</Btn>
            </DivBtn>
        </Themes>
    )
}

export default EditTheme;