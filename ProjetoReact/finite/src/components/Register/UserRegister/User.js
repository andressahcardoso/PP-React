import {Users, Header, FormItens, Option, SelectContainer,Label, FormStyled, Input, EnterWith, TextLine, EnterText, ButtonsContainer, GoogleIcon, GoogleText, NextPreviousButtons} from "./UserStyle"

// Components
import HeaderContainer from "../Header/Header"
import Footer from "../Footer/Footer"

// Formik
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';

// Axios
import Axios from "axios";

// Images
import GoogleLogo from "../../../assets/google-logo.svg"


function User() {

    const handleClickRegister = (values) => {
        console.log('Valores do formulário:', values);
        Axios.post("http://localhost:3001/register", {
            email: values.email,
            password: values.password,
            person: values.person,
        })
        .then((response) => {
            console.log('Resposta do servidor:', response.data);
            alert(response.data.msg);
            console.log(response);
        })
        .catch((error) => {
            console.error('Erro na solicitação Axios:', error);
        });
    };
    
    const validationRegister = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().min(8).required(),
        confirmPassword: yup.string().oneOf([yup.ref("password"), null], "As senhas não são iguais").required(),
        person: yup.string()
        // .test('is-selected', 'Por favor, escolha uma opção de perfil válida', (value) => {
        //     return value !== 'Opções de Perfil';
        // }).required(),
    });

    return (
        <Users> 
            <Header>
                <HeaderContainer firstDiv={true} firstBgc={false} secondDiv={false} secondBgc={false} thirdDiv={false} thirdBgc={false}/>
            </Header>
           
            <FormItens>
                <Formik initialValues={{ person: 'Opções de Perfil' }} onSubmit={handleClickRegister} validationSchema={validationRegister}>
                    <FormStyled>
                        <Option>Escolha uma opção</Option>
                        <SelectContainer>
                            <select name="person" defaultValue="Opções de Perfil"> {/* Defina o atributo 'name' para corresponder ao nome no initialValues */}
                                <option id="mainOption" value="Opções de Perfil">Opções de Perfil</option>
                                <option value="Pessoa Física">Pessoa Física</option>
                                <option value="Pessoa Jurídica">Pessoa Jurídica</option>
                            </select>
                        </SelectContainer>
                    
                        <Label for="email">Nome de usuário ou E-mail</Label>
                        <Input id="email" name="email" required/>
                        <ErrorMessage component="span" name="email"/>

                        <Label for="userName">Senha</Label>
                        <Input id="password" name="password" required/>
                        <ErrorMessage component="span" name="password"/>

                        <Label for="password">Confirmar senha</Label>
                        <Input id="confirmPassword" name="confirmPassword" required/>
                        <ErrorMessage component="span" name="confirmPassword"/>

                        <button type="submit">cadastrar</button>
                    </FormStyled>
                </Formik>
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