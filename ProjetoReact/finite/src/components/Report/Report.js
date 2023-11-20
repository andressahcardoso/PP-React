import { HeaderComponent, AddPostComponent, OptionButton, Publication, Stories, TimeDiv, Time, Num, Text, Text2, TextDiv, PostDiv, Num2, Div, Img} from "./Report.jsx";

// React 
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Components
import Nav from "../Nav/Nav";

// Icons
import previous from '../../assets/Icons/backIcon.svg'
import rankingIcon from '../../assets/rankingIcon.svg'
import post from '../../assets/Icons/post.svg'
import rankingIcon2 from '../../assets/MenuIcons/medalstar.svg'

// Api
import { api } from "../../services/api";

// Theme
import { useTheme } from "../../hooks/useTheme";


function Report() {
    const navigate = useNavigate();
    
    // Navigate functions 
    function goToRanking() {
        navigate('/Ranking')
    }
    
    function goToBack() {
        navigate(-1)
    }   

    
    // Hooks
    const [timeData, setTimeData] = useState([]);
    const [timeSpentSevenDays, setTimeSevenDay] = useState([]);
    const [currentTime, setCurrentTime] = useState([]);
    
    const [postData, setPostData] = useState([]);
    const [postSevenDays, setPostSevenDay] = useState([]);
    const [currentPost, setCurrentPost] = useState([]);
    
    const [totalHours, setTotalHours] = useState();
    const [TotalMinutes, setTotalMinutes] = useState();
    const [totalPost, setTotalPost] = useState();
    
    const id = Number(localStorage.getItem('@Auth:id'))
         
    let arrayPosts = []
    let arrayPosts2 = []
    

    // Theme definition
    const {theme} = useTheme();
    let darkMode = false;

    const darkTheme = localStorage.getItem('themeColor');
    if (darkTheme == 'black') {
        darkMode = true
    } else {
        darkMode = false
    }


    // UseEffect Onload
    useEffect(() => {
        async function fetchPosts() {

            const dataArray2 = {
                totalPost: totalPost2,
                userId: id
            }

            try {
                const responseSave = await api.post('/saveTotalPost', dataArray2);
                console.log('Time criado com sucesso:', responseSave.data);

                try {
                    const response = await api.post('/TimeSpent', {id: id}); 
                    setTimeData(response.data); 
                    setCurrentTime(response.data);

                    try {
                        const response2 = await api.post('/getTimeSpent_SevenDays', {id: id})
                        setTimeSevenDay(response2.data)
                    } catch (error) {
                        console.error('Erro ao recuperar os posts:', error);
                    }


                    try {
                        const response3 = await api.post('/getTotalPost', {id: id})
                        setPostData(teste)
                        setCurrentPost(teste)
                        response3.data.map(item => {
                            if (item.totalPost !== null) {
                                let tempPost = item.totalPost.split(',')
                                tempPost.map(f => {
                                    arrayPosts.push(f)
                                    setPostData(arrayPosts)
                                    setCurrentPost(arrayPosts)
                                })
                            }
                        })

                        try {
                            const response4 = await api.post('/getTotalPost_SevenDays', {id: id})
                            setPostSevenDay(teste)
                            response4.data.map(item => {
                                let tempPost = item.totalPost.split(',')
                                tempPost.map(f => {
                                    arrayPosts2.push(f)
                                    setPostSevenDay(arrayPosts2)
                                })
                            })
                        } catch (error) {
                            console.error('Erro ao recuperar os posts:', error);
                        }

                    } catch (error) {
                        console.error('Erro ao recuperar os posts:', error);
                    }

                } catch (error) {
                    console.error('Erro ao recuperar os posts:', error);
                }

            } catch (error) {
                console.error('Erro ao criar o Time:', error);
            }  
        }

        fetchPosts();
    }, []);
    
    
    useEffect(() => {
        let finalArray = [...new Set(postData)]
        setTotalPost(finalArray.length)
    }, [postData])
    
    let teste = localStorage.getItem('PostViewed').split(',');
    let totalPost2 = localStorage.getItem('PostViewed')

    

    // UseEffect OnChange TimeData
    useEffect(() => {
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
        setTotalHours(Math.floor(TimeSpent / 3600));
        setTotalMinutes(Math.floor((TimeSpent % 3600) / 60));
        const TotalSeconds = TimeSpent % 60;
        console.log(`Diferença de tempo: ${totalHours}:${TotalMinutes}:${TotalSeconds}`);
    }, [timeData]);

    
    // Button - Hoje e Semana
    const [activeButton, setActiveButton] = useState('publication');

    const handleButtonClick = (button) => {
      setActiveButton(button);

      if (button === 'publication') {
        setTimeData(currentTime)
        setPostData(currentPost)
      } else if (button === 'stories') {
        setTimeData(timeSpentSevenDays)
        setPostData(postSevenDays)
      }
    };


    return (
        <div style={{ background: theme.background, color: theme.color}}>
            <HeaderComponent>
                <img onClick={goToBack} src={previous} alt="Relatório"></img>
                <h2>Relatório</h2>
                <img onClick={goToRanking} src={darkMode ? rankingIcon2 : rankingIcon} alt="Ranking"></img>
            </HeaderComponent>
               
            <AddPostComponent>
                <OptionButton>
                    <Publication active={activeButton === 'publication'}
                            onClick={() => handleButtonClick('publication')}>Hoje</Publication>
                    <Stories 
                        active={activeButton === 'stories'}
                        onClick={() => handleButtonClick('stories')}>Semana</Stories>
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
                    <Num2>{totalPost}</Num2>
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