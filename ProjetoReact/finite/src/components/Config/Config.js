import { SearchComponent, Input, ImgSearch, DivInput, ConfigDiv, ConfigOption, Img, Text, FiniteDiv, Title, SubText, Year } from "./Config.jsx";

// React 
import React from 'react';
import { useNavigate } from "react-router-dom";

// Components
import MainHeader from "../MainHeader/MainHeader";
import Nav from "../Nav/Nav";

// Icon
import searchIcon from '../../assets/Icons/searchIcon.svg'
import accountIcon from '../../assets/Icons/accountIcon.svg'
import themeIcon from '../../assets/Icons/themeIcon.svg'
import privacyIcon from '../../assets/Icons/privacyIcon.svg'
import closeAccountIcon from '../../assets/Icons/closeAccountIcon.svg'

function Config() {
    const navigate = useNavigate();

    // Navigate functions
    function goToUserSettings() {
        navigate('/User/Settings')
    }

    const handleLogout = () => {
        localStorage.clear()
        navigate('/')
    }

    function goToTheme() {
        navigate('/EditTheme')
    }


    
    return (
        <>
            <MainHeader title='Configurações'/>
                
            <SearchComponent>
                <div>
                    <DivInput>
                        <Input/>
                        <ImgSearch src={searchIcon}/>
                    </DivInput>

                    <div>
                        <ConfigDiv onClick={goToUserSettings}>
                            <ConfigOption>
                                <Img src={accountIcon}/>
                                <Text>Conta</Text>
                            </ConfigOption>
                        </ConfigDiv>

                        <ConfigDiv onClick={goToTheme}>
                            <ConfigOption>
                                <Img src={themeIcon}/>
                                <Text>Tema</Text>
                            </ConfigOption>
                        </ConfigDiv>

                        <ConfigDiv>
                            <ConfigOption>
                                <Img src={privacyIcon}/>
                                <Text>Privacidade</Text>
                            </ConfigOption>
                        </ConfigDiv>

                        <FiniteDiv>
                            <Title>Finite</Title>
                            <SubText>Você ja parou para pensar quanto tempo gasta por dia em redes sociais tradicionais? Com a Finite esse controle será muito mais acessivel a você!</SubText>
                            <Year>2023</Year>
                        </FiniteDiv>

                        <ConfigDiv onClick={handleLogout}>
                            <ConfigOption>
                                <Img src={closeAccountIcon}/>
                                <Text>Sair</Text>
                            </ConfigOption>
                        </ConfigDiv>

                        <ConfigDiv>
                            <ConfigOption>
                                <Img src={accountIcon}/>
                                <Text>Excluir conta</Text>
                            </ConfigOption>
                        </ConfigDiv>
                    </div>
                </div>
            </SearchComponent>

            <Nav/>
        </>
    )
}

export default Config;