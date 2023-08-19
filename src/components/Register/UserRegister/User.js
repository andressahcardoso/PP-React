import {Users, Header, FormItens, Option, SelectContainer,Label, Input, EnterWith, TextLine, EnterText, ButtonsContainer, GoogleIcon, GoogleText, NextPreviousButtons} from "./UserStyle"

// Components
import HeaderContainer from "../Header/Header"
import Footer from "../Footer/Footer"

// Images
import GoogleLogo from "../../../assets/google-logo.svg"


function User() {
    return (
        <Users> 
            <Header>
                <HeaderContainer firstDiv={true} firstBgc={false} secondDiv={false} secondBgc={false} thirdDiv={false} thirdBgc={false}/>
            </Header>
           
            <FormItens>
                <form>
                    <Option>Escolha uma opção</Option>
                    <SelectContainer>
                        <select>
                            <option id="mainOption">Opções de Perfil</option>
                            <option >Pessoa Física</option>
                            <option >Pessoa Jurídica</option>
                        </select>
                    </SelectContainer>
                
                    <Label for="email">Nome de usuário ou E-mail</Label>
                    <Input type="text" id="email" required/>

                    <Label for="userName">Senha</Label>
                    <Input type="password" id="userName" required/>

                    <Label for="password">Confirmar senha</Label>
                    <Input type="password" id="password" required/>
                </form>
            </FormItens>

            <EnterWith>
                <TextLine>
                    <EnterText>Registrar com</EnterText>
                </TextLine>

                <ButtonsContainer>
                    <GoogleIcon src={GoogleLogo}/>
                    <GoogleText>Google</GoogleText>
                </ButtonsContainer>
            </EnterWith>

            <NextPreviousButtons>
                <Footer back="/Register/Informations" next="/Register/Forms"/>
            </NextPreviousButtons>
        </Users>
    )
}

export default User;