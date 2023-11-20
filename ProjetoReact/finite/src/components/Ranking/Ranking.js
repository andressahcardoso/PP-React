import { HeaderComponent, AddPostComponent, OptionButton, ListDiv, Publication, Stories, TopSection, UserDiv, UserDiv2, ImgDiv2, ImgDiv3, Img, NumberDiv, NumberDiv2, NumberDiv3, NumberImg, Profile, Account, MainUser, MainImg, ImgMain, ListSection, ListSection1, ListSection2, ListSection3, ImgList, Name, AccountUser, TimeDiv, Users, Informations, Num} from "./Ranking.jsx";

// React 
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Components
import Nav from "../Nav/Nav";

// Images
import user1 from '../../assets/user4.svg'
import user2 from '../../assets/user2.svg'
import user3 from '../../assets/user3.svg'

// Icons
import first from '../../assets/Icons/first.svg'
import second from '../../assets/Icons/second.svg'
import third from '../../assets/Icons/third.svg'
import reportIcon from '../../assets/reportIcon.svg'
import previous from '../../assets/Icons/backIcon.svg'

import reportIcon2 from '../../assets/MenuIcons/clock.svg'

// Api
import { api } from "../../services/api";

// Theme
import { useTheme } from "../../hooks/useTheme";


function Ranking() {
    const navigate = useNavigate();

    // Navigate functions
    function goToReport() {
        navigate('/Report')
    }

    function goToBack() {
        navigate(-1)
    }


    // Hooks
    const [userTime, setUserTime] = useState([]); 
    const [userTime_week, setUserTime_Week] = useState([]);
    const [userTime_day, setUserTimeDay] = useState([]);
    // Button - Hoje e Semana
    const [activeButton, setActiveButton] = useState('publication');

    const id = Number(localStorage.getItem("@Auth:id"))


    // Theme
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
                
            const dataArray = {
                time: diferencaSegundos,
                userId: id
            }; 
                
            try {
                const response = await api.post('/saveTimeSpent', dataArray);
                console.log('Time criado com sucesso:', response.data);
            } catch (error) {
                console.error('Erro ao criar o Time:', error);
            }


            // Pegar informações do ranking
            try {
                const response = await api.get('/SelectTotalTime'); 
                setUserTimeDay(response.data); 
                setUserTime(response.data)

                try {
                    const response2 = await api.get('/TotalTime_Week'); 
                    setUserTime_Week(response2.data); 
                    console.log('response.data :', response2.data);
                } catch (error) {
                    console.error('Erro ao recuperar as informações do ranking:', error);
                }
            } catch (error) {
                console.error('Erro ao recuperar as informações do ranking:', error);
            }
        }
 
         fetchPosts();
    }, []);



    // Date - Hoje ou Semana
    const handleButtonClick = (button) => {
      setActiveButton(button);

      if (button === 'publication') {
        setUserTime(userTime_day)
      } else if (button === 'stories') {
        setUserTime(userTime_week)
      }
    };


    return (
        <div style={{ background: theme.background, color: theme.color}}>
            <HeaderComponent>
                <img onClick={goToReport} src={darkMode ? reportIcon2 : reportIcon} alt="Relatório"></img>
                <h2>Ranking</h2>
                <img onClick={goToBack} src={previous} alt="Ranking"></img>
            </HeaderComponent>
                
            <AddPostComponent>
                <OptionButton>
                    <Publication active={activeButton === 'publication'}
                            onClick={() => handleButtonClick('publication')}>Hoje</Publication>
                    <Stories 
                        active={activeButton === 'stories'}
                        onClick={() => handleButtonClick('stories')}>Semana</Stories>
                </OptionButton>

                <TopSection>
                    {userTime.map((person, index) => {
                        let name = person.name.split(' ')[0]

                        if (index === 1) {
                            return (
                                <UserDiv key={index}>
                                    <ImgDiv2>
                                        <Img src={user1} />
                                    </ImgDiv2>
                                    <NumberDiv2>
                                        <NumberImg src={second} />
                                    </NumberDiv2>
                                    <Profile>{name}</Profile>
                                    <Account>{'@' + person.userName}</Account>
                                </UserDiv>
                            );
                        } else if (index === 0) {
                            return (
                                <MainUser key={index}>
                                    <MainImg>
                                        <ImgMain src={user3} />
                                    </MainImg>
                                    <NumberDiv>
                                        <NumberImg src={first} />
                                    </NumberDiv>
                                    <Profile>{name}</Profile>
                                    <Account>{'@' + person.userName}</Account>
                                </MainUser>
                            );
                        } else if (index === 2) {
                            return (
                                <UserDiv2 key={index}>
                                    <ImgDiv3>
                                        <Img src={user2} />
                                    </ImgDiv3>
                                    <NumberDiv3>
                                        <NumberImg src={third} />
                                    </NumberDiv3>
                                    <Profile>{name}</Profile>
                                    <Account>{'@' + person.userName}</Account>
                                </UserDiv2>
                            );
                        }
                        return null;
                    })}
                </TopSection>


                <ListDiv>
                {userTime.map((person, index) => {
                    console.log('person :', person);

                    let hours = (Math.floor(person.totalTime / 3600));
                    let minutes = (Math.floor((person.totalTime % 3600) / 60));
                    let name = person.name.split(' ')[0]

                    if (index === 0) {
                        return (
                            <ListSection1>
                                <Informations>
                                    <Num>{index+1}</Num>
                                    <Users>
                                        <ImgList src={user3}/>
                                        <div>
                                            <Name>{name}</Name>
                                            <AccountUser>-------</AccountUser>
                                        </div>
                                    </Users>
                                </Informations>
                                    
                                <TimeDiv>
                                    <Num>{hours}</Num>
                                    <p>h</p>
                                    <Num>{minutes}</Num>
                                    <p>min</p>
                                </TimeDiv>
                            </ListSection1>
                        )
                    } else if (index === 1) {
                        return (
                            <ListSection2>
                                <Informations>
                                    <Num>{index+1}</Num>
                                    <Users>
                                        <ImgList src={user3}/>
                                        <div>
                                            <Name>{name}</Name>
                                            <AccountUser>-------</AccountUser>
                                        </div>
                                    </Users>
                                </Informations>
                                    
                                <TimeDiv>
                                    <Num>{hours}</Num>
                                    <p>h</p>
                                    <Num>{minutes}</Num>
                                    <p>min</p>
                                </TimeDiv>
                            </ListSection2>
                        ) 
                    } else if (index === 2) {
                        return (
                            <ListSection3>
                                <Informations>
                                    <Num>{index+1}</Num>
                                    <Users>
                                        <ImgList src={user3}/>
                                        <div>
                                            <Name>{name}</Name>
                                            <AccountUser>-------</AccountUser>
                                        </div>
                                    </Users>
                                </Informations>
                                    
                                <TimeDiv>
                                    <Num>{hours}</Num>
                                    <p>h</p>
                                    <Num>{minutes}</Num>
                                    <p>min</p>
                                </TimeDiv>
                            </ListSection3>
                        )
                    } else {
                        return (
                            <ListSection>
                                <Informations>
                                    <Num>{index+1}</Num>
                                    <Users>
                                        <ImgList src={user3}/>
                                        <div>
                                            <Name>{name}</Name>
                                            <AccountUser>-------</AccountUser>
                                        </div>
                                    </Users>
                                </Informations>
                                    
                                <TimeDiv>
                                    <Num>{hours}</Num>
                                    <p>h</p>
                                    <Num>{minutes}</Num>
                                    <p>min</p>
                                </TimeDiv>
                            </ListSection>
                        )
                    }
                    
                })}
                </ListDiv>
            </AddPostComponent>

            <Nav/>
        </div>
    )
}

export default Ranking;