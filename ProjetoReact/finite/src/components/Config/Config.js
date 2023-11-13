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
import accountIcon2 from '../../assets/Icons/userremove.svg'
import themeIcon from '../../assets/Icons/themeIcon.svg'
import themeIcon2 from '../../assets/Icons/palette.svg'
import privacyIcon from '../../assets/Icons/privacyIcon.svg'
import privacyIcon2 from '../../assets/Icons/lock.svg'
import closeAccountIcon from '../../assets/Icons/closeAccountIcon.svg'
import closeAccountIcon2 from '../../assets/Icons/Vector.svg'

import { useTheme } from "../../hooks/useTheme";

function Config() {
    const {theme} = useTheme();

    let darkMode = false;

    const darkTheme = localStorage.getItem('themeColor');
    console.log('darkTheme :', darkTheme);
    if (darkTheme == 'black') {
        darkMode = true
    } else {
        darkMode = false
    }

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
        <div style={{ background: theme.background, color: theme.color}}>
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
                                <Img src={darkMode ? accountIcon2 : accountIcon}/>
                                <Text>Conta</Text>
                            </ConfigOption>
                        </ConfigDiv>

                        <ConfigDiv onClick={goToTheme}>
                            <ConfigOption>
                                <Img src={darkMode ? themeIcon2 : themeIcon}/>
                                <Text>Tema</Text>
                            </ConfigOption>
                        </ConfigDiv>

                        <ConfigDiv>
                            <ConfigOption>
                                <Img src={darkMode ? privacyIcon2 : privacyIcon}/>
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
                                <Img src={darkMode ? closeAccountIcon2 : closeAccountIcon}/>
                                <Text>Sair</Text>
                            </ConfigOption>
                        </ConfigDiv>

                        <ConfigDiv>
                            <ConfigOption>
                                <Img src={darkMode ? accountIcon2 : accountIcon}/>
                                <Text>Excluir conta</Text>
                            </ConfigOption>
                        </ConfigDiv>
                    </div>
                </div>
            </SearchComponent>

            <Nav/>
        </div>
    )
}

export default Config;