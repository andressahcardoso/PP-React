import {ImgContainer, ImgSun, SunTheme, Title, Subtitle, ParagrafoImg, ButtonTheme, CheckBoxWrapper, CheckBox } from "../../pages/Register/Theme/ThemeStyle"
import { HeaderComponent, DivBtn, Btn, Themes } from "./style";

// React
import { useNavigate } from "react-router-dom";

// Images
import SunImg from "../../assets/Sun.svg"
import SunImg2 from "../../assets/Sun2.svg"

// Icons
import previous from '../../assets/Icons/backIcon.svg'

import { CheckBoxLabel as LightThemes2} from "../../pages/Register/Theme/ThemeLight"; // Importe os estilos para o tema claro
import { CheckBoxLabel as DarkThemes2 } from "../../pages/Register/Theme/ThemeDark";

// Theme
import { useTheme } from '../../hooks/useTheme';


function EditTheme() {
    const navigate = useNavigate();

    function goToBack() {
        navigate(-1)
    }

    function goToUser() {
        navigate(-1)
    }


    // Theme definition
    const { theme, toggleTheme } = useTheme();

    let LabelComponents = LightThemes2

    if (theme.color === 'white') {
        LabelComponents = DarkThemes2;
    } else {
        LabelComponents = LightThemes2;
    }


    return (
        <Themes style={{ background: theme.background, color: theme.color }}> 
        
         <HeaderComponent>
                <h2>Alterar tema</h2>
                <img onClick={goToBack} src={previous} alt="Back"></img>
            </HeaderComponent>
           
            <SunTheme>
                <ImgContainer>
                    <ImgSun src={theme.color === 'white' ? SunImg2 : SunImg} />
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