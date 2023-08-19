import {Themes, Header, SunTheme, ImgContainer, ImgSun, Title, Subtitle, ParagrafoImg, ButtonTheme, CheckBoxWrapper, CheckBox, CheckBoxLabel, NextPreviousButtons} from "./ThemeStyle"

// Components
import HeaderContainer from "../Header/Header"
import Footer from "../Footer/Footer"

// Images
import SunImg from "../../../assets/Sun.svg"


function Theme() {
    return (
        <Themes> 
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
                    <CheckBox id="checkbox" type="checkbox"  />
                    <CheckBoxLabel htmlFor="checkbox" />
                </CheckBoxWrapper>
            </ButtonTheme>

            <NextPreviousButtons>
                <Footer back="/Register/Forms" next="/"/>
            </NextPreviousButtons>
        </Themes>
    )
}

export default Theme;