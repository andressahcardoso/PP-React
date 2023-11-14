import { HeaderComponent, AddPostComponent, OptionButton, Publication, Stories, TimeDiv, Time, Num, Text, Text2, TextDiv, PostDiv, Num2, Div, Img} from "./Report.jsx";

// React 
import { useNavigate } from "react-router-dom";

// Components
import Nav from "../Nav/Nav";

// Icons
import previous from '../../assets/Icons/backIcon.svg'
import rankingIcon from '../../assets/rankingIcon.svg'
import post from '../../assets/Icons/post.svg'
import rankingIcon2 from '../../assets/MenuIcons/medalstar.svg'

import { useTheme } from "../../hooks/useTheme";
import { useEffect, useState } from "react";


// Api
import { api } from "../../services/api";



function Report() {
    const {theme} = useTheme();
    const [timeData, setTime] = useState([]);

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
    function goToRanking() {
        navigate('/Ranking')
    }

    function goToBack() {
        navigate(-1)
    }   

    const id = Number(localStorage.getItem('@Auth:id'))

    useEffect(() => {
        async function fetchPosts() {
            try {
                const response = await api.post('/TimeSpent', {id: id}); 
                console.log('============response :', response.data);
                setTime(response.data); 
            } catch (error) {
                console.error('Erro ao recuperar os posts:', error);
            }
        }

        var uma_semana = new Date();
        uma_semana.setDate(uma_semana.getDate() - 7);

        var um_mes = new Date();
        um_mes.setMonth(um_mes.getMonth() - 1);

        var um_ano = new Date();
        um_ano.setFullYear(um_ano.getFullYear() - 1);

        console.log(uma_semana);

        fetchPosts();
    }, []);


    // Seta o valor do endTime no localStorage
    const EndDate = new Date();
    localStorage.setItem('EndTime', `${EndDate.getHours()}:${EndDate.getMinutes()}:${EndDate.getSeconds()}`);


    
    const horaInicial = localStorage.getItem('StartTime');
    const horaFinal = localStorage.getItem('EndTime');
    
    // Função para converter uma string de hora para segundos
    function converterParaSegundos(hora) {
        const partes = hora.split(":");
        return parseInt(partes[0]) * 3600 + parseInt(partes[1]) * 60 + parseInt(partes[2]);
    }
    
    let total_DbTime = 0

    timeData.map(timeItem => {
        total_DbTime += Number(timeItem.timeSpent)
    })
    
    // Converter horas iniciais e finais para segundos
    const segundosInicio = converterParaSegundos(horaInicial);
    const segundosFim = converterParaSegundos(horaFinal);
            
    // Calcular a diferença em segundos
    let TimeSpent = total_DbTime + (segundosFim - segundosInicio);
    console.log('total_DbTime :', total_DbTime);
    console.log('TimeSpent :', TimeSpent);
        


    // Converter a diferença de volta para o formato de horas, minutos e segundos
    const totalHours = Math.floor(TimeSpent / 3600);
    const TotalMinutes = Math.floor((TimeSpent % 3600) / 60);
    const TotalSeconds = TimeSpent % 60;
    console.log(`Diferença de tempo: ${totalHours}:${TotalMinutes}:${TotalSeconds}`);

   

    return (
        <div style={{ background: theme.background, color: theme.color}}>
            <HeaderComponent>
                <img onClick={goToBack} src={previous} alt="Relatório"></img>
                <h2>Relatório</h2>
                <img onClick={goToRanking} src={darkMode ? rankingIcon2 : rankingIcon} alt="Ranking"></img>
            </HeaderComponent>
               
            <AddPostComponent>
                <OptionButton>
                    <Publication>Hoje</Publication>
                    <Stories>Semana</Stories>
                </OptionButton>

                <TimeDiv>
                    <Time>
                        <Num>{`${totalHours}:${TotalMinutes}`}</Num>
                    </Time>
                    <Text>Tempo total ativo</Text>
                </TimeDiv>

                <TextDiv>
                    <Text2>Total de publicação visualizadas</Text2>
                </TextDiv>

                <PostDiv>
                    <Num2>30</Num2>
                    <Div>
                        <Img src={post}/>
                    </Div>
                </PostDiv>
            </AddPostComponent>

            <Nav/>
        </div>
    )
}

export default Report;