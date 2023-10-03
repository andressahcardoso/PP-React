import {Users, Header, FormItens, Option, SelectContainer,Label, Form, Input, EnterWith, TextLine, EnterText, ButtonsContainer, GoogleIcon, GoogleText, NextPreviousButtons} from "./UserStyle"

// Components
import HeaderContainer from "../Header/Header"
import Footer from "../Footer/Footer"


import { useState } from "react";
import { api } from "../../../services/api";


// Images
import GoogleLogo from "../../../assets/google-logo.svg"


function User() {

    const [person, setPerson] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [birthDate, setBirthDate] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
        person,
        email,
        birthDate,
        password,
        };
        await api.post("/user/create", data);
        alert("Usuário criado com sucesso!");
    };

    return (
        <Users> 
            <Header>
                <HeaderContainer firstDiv={true} firstBgc={false} secondDiv={false} secondBgc={false} thirdDiv={false} thirdBgc={false}/>
            </Header>
           
            <FormItens>
                <Form onSubmit={handleSubmit}>
                        <Option>Escolha uma opção</Option>
                        <SelectContainer>
                            <select  type="text"
                                value={person}
                                onChange={(e) => setPerson(e.target.value)}> {/* Defina o atributo 'name' para corresponder ao nome no initialValues */}
                                <option id="mainOption" value="Opções de Perfil">Opções de Perfil</option>
                                <option value="Pessoa Física">Pessoa Física</option>
                                <option value="Pessoa Jurídica">Pessoa Jurídica</option>
                            </select>
                        </SelectContainer>
                    
                        <Label for="email">Nome de usuário ou E-mail</Label>
                        <Input 
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}/>

                        <Label for="userName">Data Nascimento</Label>
                        <Input
                            type="date"
                            value={birthDate}
                            onChange={(e) => setBirthDate(e.target.value)}/>

                        <Label for="userName">Senha</Label>
                        <Input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}/>

                        <button type="submit">cadastrar</button>
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

            <NextPreviousButtons>
                <Footer back="/Register/Informations" next="/Register/Forms"/>
            </NextPreviousButtons>
        </Users>
    )
}

export default User;