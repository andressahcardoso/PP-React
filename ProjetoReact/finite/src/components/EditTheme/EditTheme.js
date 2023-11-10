import {Header, SunTheme, ImgContainer, ImgSun, Title, Themes, Subtitle, ParagrafoImg, ButtonTheme, CheckBoxWrapper, CheckBox, NextPreviousButtons } from "../../pages/Register/Theme/ThemeStyle"


// Images
import SunImg from "../../assets/Sun.svg"
import SunImg2 from "../../assets/Sun2.svg"


import { CheckBoxLabel as LightThemes2} from "../../pages/Register/Theme/ThemeLight"; // Importe os estilos para o tema claro

import { useTheme } from '../../hooks/useTheme';
import { useNavigate } from "react-router-dom";

function EditTheme() {
    const { theme, toggleTheme } = useTheme();
    const navigate = useNavigate();

    function goToSettings() {
        navigate('/Config')
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

            <button onClick={goToSettings}>Voltar</button>
        </Themes>
    )
}

export default EditTheme;