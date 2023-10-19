import {Users, Header, FormItens, Option, SelectContainer,Label, Form, Input, EnterWith, TextLine, EnterText, ButtonsContainer, GoogleIcon, GoogleText, NextPreviousButtons} from "./UserStyle"

// Components
import HeaderContainer from "../Header/Header"
import Footer from "../Footer/Footer"

// React
import { useState } from "react";

// Service Api
import { api } from "../../../services/api";

// Images
import GoogleLogo from "../../../assets/google-logo.svg"

import { useNavigate } from 'react-router-dom';

function User() {

    const navigate = useNavigate();

    // Registro de usuário - API 
    // Cada uma dessas quatro linhas abaixo são Hooks, que são funções que permitem a você “ligar-se” aos recursos de state e ciclo de vida do React a partir de componentes funcionais. 
    const [name, setName] = useState("");
    const [userName, setUserName] = useState("");
    const [person, setPerson] = useState(""); 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Função que recebe o E como parâmetro que representa um evento associado ao envio do formulário.
    const handleSubmit = async (e) => {
        // Evita que o envio do formulário seja tratado de maneira padrão pelo navegador e faz com que você possa determinar as ações futuras.
        e.preventDefault();
        const data = {
            person,
            name,
            userName,
            email,
            password,
        };
        
        console.log('data :', data);
        // Navegar para a segunda tela e passar os dados como argumentos
        navigate('/Register/Forms', { state: { formData: data } });
    };

    return (
        <Users> 
            <Header>
                <HeaderContainer firstDiv={true} firstBgc={false} secondDiv={false} secondBgc={false} thirdDiv={false} thirdBgc={false}/>
            </Header>
           
            <FormItens>
                <Form>
                        <Option>Escolha uma opção</Option>
                        <SelectContainer>
                            <select type="text"
                                value={person}
                                onChange={(e) => setPerson(e.target.value)}>
                                <option id="mainOption" value="Opções de Perfil">Opções de Perfil</option>
                                <option value="Pessoa Física">Pessoa Física</option>
                                <option value="Pessoa Jurídica">Pessoa Jurídica</option>
                            </select>
                        </SelectContainer>

                        <Label for="userName">Nome completo</Label>
                        <Input type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}/>
                    
                        <Label for="userName">Nome de usuário</Label>
                        <Input type="userName"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}/>

                        <Label for="email">E-mail</Label>
                        <Input type="email"
                            value={email}
                            // A cada alteração a função setEmail é chamada e é ela que atualiza o valor do campo e-mail de acordo com o que o usuário preencheu. 
                            onChange={(e) => setEmail(e.target.value)}/>

                        <Label for="userName">Senha</Label>
                        <Input type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}/>
                </Form>
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

            <NextPreviousButtons onClick={handleSubmit}>
                <Footer back="/Register/Informations" next="/Register/Forms"/>
            </NextPreviousButtons>
        </Users>
    )
}

export default User;