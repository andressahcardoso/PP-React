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

// Api
import { api } from "../../services/api";

// Theme
import { useTheme } from "../../hooks/useTheme";


function Config() {
    const navigate = useNavigate();
    
    // Navigate functions
    function goToUserSettings() {
        navigate('/User/Settings')
    }
    
    function goToTheme() {
        navigate('/EditTheme')
    }
    

    // Theme definition
    const {theme} = useTheme();
    let darkMode = false;

    const darkTheme = localStorage.getItem('themeColor');
    if (darkTheme == 'black') {
        darkMode = true
    } else {
        darkMode = false
    }
    
    
    const id = Number(localStorage.getItem("@Auth:id"))


    // Logout function
    const handleLogout = async (e) => {
        e.preventDefault();

        const data = new Date();
            
        const horas = data.getHours();
        const minutos = data.getMinutes();
        const segundos = data.getSeconds();
                
        localStorage.setItem('EndTime', `${horas}:${minutos}:${segundos}`);

        const horaInicial = localStorage.getItem('StartTime');
        const horaFinal = localStorage.getItem('EndTime');

        // Função para converter uma string de hora para segundos
        function converterParaSegundos(hora) {
            const partes = hora.split(":");
            return parseInt(partes[0]) * 3600 + parseInt(partes[1]) * 60 + parseInt(partes[2]);
        }
            
        // Converter horas iniciais e finais para segundos
        const segundosInicio = converterParaSegundos(horaInicial);
        const segundosFim = converterParaSegundos(horaFinal);
           
        // Calcular a diferença em segundos
        const diferencaSegundos = segundosFim - segundosInicio;
          
        // Converter a diferença de volta para o formato de horas, minutos e segundos
        const horas2 = Math.floor(diferencaSegundos / 3600);
        const minutos2 = Math.floor((diferencaSegundos % 3600) / 60);
        const segundos2 = diferencaSegundos % 60;

        let time = `${horas2}:${minutos2}:${segundos2}`
        const totalPost = localStorage.getItem('PostViewed');
        console.log('totalPost :', totalPost);
            
        const dataArray = {
            time: diferencaSegundos,
            userId: id
        }; 
            

        const dataArray2 = {
            totalPost: totalPost,
            userId: id
        }; 
            
        try {
            const response = await api.post('/saveTimeSpent', dataArray);
            
            localStorage.clear()
            navigate('/')
      
            console.log('Time criado com sucesso:', response.data);

            try {
                const response = await api.post('/saveTotalPost', dataArray2);
                
                localStorage.clear()
                navigate('/')
          
                console.log('Time criado com sucesso:', response.data);
            } catch (error) {
                console.error('Erro ao criar o Time:', error);
            }
        } catch (error) {
            console.error('Erro ao criar o Time:', error);
        }
    };


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