import { HeaderComponent, AddPostComponent, OptionButton, Publication, Stories, TopSection, UserDiv, ImgDiv2, ImgDiv3, Img, NumberDiv, NumberDiv2, NumberDiv3, NumberImg, Profile, Account, MainUser, MainImg, ImgMain, ListSection, ListSection1, ListSection2, ListSection3, ImgList, Name, AccountUser, TimeDiv, Users, Informations, Num} from "./Ranking.jsx";

// React Router
import { useNavigate } from "react-router-dom";

// Components
import Nav from "../Nav/Nav";

// Images
import user1 from '../../assets/user4.svg'
import user2 from '../../assets/user2.svg'
import user3 from '../../assets/user3.svg'
import user5 from '../../assets/user.svg'

// Icons
import first from '../../assets/Icons/first.svg'
import second from '../../assets/Icons/second.svg'
import third from '../../assets/Icons/third.svg'
import reportIcon from '../../assets/reportIcon.svg'
import previous from '../../assets/Icons/backIcon.svg'

function Ranking() {
    const navigate = useNavigate();

    // Navigate functions
    function goToReport() {
        navigate('/Report')
    }

    function goToBack() {
        navigate(-1)
    }

    return (
        <>
            <HeaderComponent>
                <img onClick={goToReport} src={reportIcon} alt="Relatório"></img>
                <h2>Ranking</h2>
                <img onClick={goToBack} src={previous} alt="Ranking"></img>
            </HeaderComponent>
                
            <AddPostComponent>
                <OptionButton>
                    <Publication>Hoje</Publication>
                    <Stories>Semana</Stories>
                </OptionButton>

                <TopSection>
                    <UserDiv>
                        <ImgDiv2>
                            <Img src={user1}/>
                        </ImgDiv2>
                        <NumberDiv2>
                            <NumberImg src={second}/>
                        </NumberDiv2>
                        <Profile>Usuário 2</Profile>
                        <Account>@usuario_02</Account>
                    </UserDiv>

                    <MainUser>
                        <MainImg>
                            <ImgMain src={user3}/>
                        </MainImg>
                        <NumberDiv>
                            <NumberImg src={first}/>
                        </NumberDiv>
                        <Profile>Usuário 1</Profile>
                        <Account>@usuario_01</Account>
                    </MainUser>

                    <UserDiv>
                        <ImgDiv3>
                            <Img src={user2}/>
                        </ImgDiv3>
                        <NumberDiv3>
                            <NumberImg src={third}/>
                        </NumberDiv3>
                        <Profile>Usuário 3</Profile>
                        <Account>@usuario_03</Account>
                    </UserDiv>
                </TopSection>

                <ListSection1>
                    <Informations>
                        <Num>1</Num>
                        <Users>
                            <ImgList src={user3}/>
                            <div>
                                <Name>Usuário 1</Name>
                                <AccountUser>-------</AccountUser>
                            </div>
                        </Users>
                    </Informations>
                        
                    <TimeDiv>
                        <Num>30</Num>
                        <p>min</p>
                    </TimeDiv>
                </ListSection1>

                <ListSection2>
                    <Informations>
                        <Num>2</Num>
                        <Users>
                            <ImgList src={user1}/>
                            <div>
                                <Name>Usuário 2</Name>
                                <AccountUser>-------</AccountUser>
                            </div>
                        </Users>
                    </Informations>
                        
                    <TimeDiv>
                        <Num>1</Num>
                        <p>h</p>
                        <Num>45</Num>
                        <p>min</p>
                    </TimeDiv>
                </ListSection2>

                <ListSection3>
                    <Informations>
                        <Num>3</Num>
                        <Users>
                            <ImgList src={user2}/>
                            <div>
                                <Name>Usuário 3</Name>
                                <AccountUser>-------</AccountUser>
                            </div>
                        </Users>
                    </Informations>
                       
                    <TimeDiv>
                        <Num>3</Num>
                        <p>h</p>
                    </TimeDiv>
                </ListSection3>

                <ListSection>
                    <Informations>
                        <Num>4</Num>
                        <Users>
                            <ImgList src={user5}/>
                            <div>
                                <Name>Usuário 1</Name>
                                <AccountUser>-------</AccountUser>
                            </div>
                        </Users>
                    </Informations>
                       
                    <TimeDiv>
                        <Num>4</Num>
                        <p>h</p>
                    </TimeDiv>
                </ListSection>
            </AddPostComponent>

            <Nav/>
        </>
    )
}

export default Ranking;