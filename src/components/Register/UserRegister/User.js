import {Users, Header, Line, CircleStep, StepConclued, InformationStep, StepMargin, Step, FormItens, SelectContainer, Option, Label, Input, EnterWith, TextLine, EnterText, ButtonsContainer, GoogleIcon, GoogleText, Button, NextButton, NextPreviousButtons, Div} from "./styled"

import GoogleLogo from "../../../assets/google-logo.svg"
import NextButtonImg from "../../../assets/next.png"
import { Link } from "react-router-dom"

function User() {
    return (
        <Users> 
            <Header>
                <Line></Line>
                <Div>
                    <CircleStep>
                        <StepConclued>1</StepConclued>
                    </CircleStep>
                    <InformationStep>Informações</InformationStep>
                </Div>
                <StepMargin>
                    <CircleStep>
                        <Step>2</Step>
                    </CircleStep>
                    <InformationStep>Questionário</InformationStep>
                </StepMargin>
                <div>
                    <CircleStep>
                        <Step>3</Step>
                    </CircleStep>
                    <InformationStep>Tema</InformationStep>
                </div>    
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
                <Link to="/Register/Informations"><Button>Voltar</Button></Link>
                <Link to="/Register/Forms"><NextButton src={NextButtonImg} alt="Próxima etapa"/></Link>
            </NextPreviousButtons>
    </Users>
    )
}

export default User