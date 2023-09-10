import { StorieSection, Storie, Div, StorieImgDiv, StorieImg, TextDiv, Profile, Account, ImgDate, DateText, Month } from "./Stories.jsx";

// React Router
import { useNavigate } from 'react-router-dom';

// Components
import MainHeader from "../MainHeader/MainHeader";
import Nav from "../Nav/Nav";

// Images
import storie1 from '../../assets/Storie/storie1.png'
import storie2 from '../../assets/Storie/storie2.png'
import storie3 from '../../assets/Storie/storie3.png'
import storie4 from '../../assets/Storie/storie4.png'
import storie5 from '../../assets/Storie/storie5.png'
import user1 from '../../assets/user1.svg'
import user2 from '../../assets/user2.svg'
import user3 from '../../assets/user3.svg'
import user4 from '../../assets/user4.svg'
import user5 from '../../assets/picture2.png'

// Icons
import DateIcon from '../../assets/Icons/line.svg'


import { useUserContext } from './UserContext.js';

function Stories() {

    const navigate = useNavigate();
    const { setUserData } = useUserContext();

    function goToUserStorie(personVar, accountVar, userVar, storieVar, nextVar) {
        const userData = { person: personVar, account: accountVar, user: userVar, imagem: storieVar, next: nextVar }; // Substitua pelos dados que deseja passar
        setUserData(userData);
        navigate(`/User/Storie`);
    }
    return (
        <>
            <MainHeader title='Stories'/>

            <StorieSection>
                <Storie>
                    <Div>
                        <StorieImgDiv>
                            <StorieImg onClick={() => goToUserStorie('Prahabas Raju', '@Praba_01', user1, storie1, storie2)} src={storie1} alt="Imagem storie"/>
                        </StorieImgDiv>
                        <TextDiv>
                            <Profile>Prabhas Raju</Profile>
                            <Account>@Praba_01</Account>
                        </TextDiv>
                    </Div>
                    <p>
                        <DateText>26</DateText>
                        <ImgDate>
                            <img src={DateIcon} alt="Line Icon"/>
                        </ImgDate>
                        <Month>11</Month>
                    </p>
                </Storie>

                <Storie>
                    <Div>
                        <StorieImgDiv>
                            <StorieImg onClick={() => goToUserStorie('Alice', '@alice_01', user3, storie2, storie3)} src={storie2} alt="Imagem storie"/>
                        </StorieImgDiv>
                        <TextDiv>
                            <Profile>Alice</Profile>
                            <Account>@alice_01</Account>
                        </TextDiv>
                    </Div>
                    <p>
                        
                        <DateText>26</DateText>
                        <ImgDate>
                            <img src={DateIcon} alt="Line Icon"/>
                        </ImgDate>
                        <Month>11</Month>
                    </p>
                </Storie>

                <Storie>
                    <Div>
                        <StorieImgDiv>
                            <StorieImg onClick={() => goToUserStorie('Vini Souza', '@vini_02', user2, storie3, storie4)} src={storie3} alt="Imagem storie"/>
                        </StorieImgDiv>
                        <TextDiv>
                            <Profile>Vini Souza</Profile>
                            <Account>@vini_02</Account>
                        </TextDiv>
                    </Div>
                    <p>
                        
                        <DateText>26</DateText>
                        <ImgDate>
                            <img src={DateIcon} alt="Line Icon"/>
                        </ImgDate>
                        <Month>11</Month>
                    </p>
                </Storie>


                <Storie>
                    <Div>
                        <StorieImgDiv>
                            <StorieImg onClick={() => goToUserStorie('David', '@david_04', user2, storie4, storie5)}  src={storie4} alt="Imagem storie"/>
                        </StorieImgDiv>
                        <TextDiv>
                            <Profile>David</Profile>
                            <Account>@david_04</Account>
                        </TextDiv>
                    </Div>
                    <p>
                        
                        <DateText>25</DateText>
                        <ImgDate>
                            <img src={DateIcon} alt="Line Icon"/>
                        </ImgDate>
                        <Month>11</Month>
                    </p>
                </Storie>

                <Storie>
                    <Div>
                        <StorieImgDiv>
                            <StorieImg onClick={() => goToUserStorie('Malu', '@malukitalu', user4, storie5, storie5)} src={storie5} alt="Imagem storie"/>
                        </StorieImgDiv>
                        <TextDiv>
                            <Profile>Malu</Profile>
                            <Account>@malukitalu</Account>
                        </TextDiv>
                    </Div>
                    <p>
                        
                        <DateText>25</DateText>
                        <ImgDate>
                            <img src={DateIcon} alt="Line Icon"/>
                        </ImgDate>
                        <Month>11</Month>
                    </p>
                </Storie>
            </StorieSection>

            <Nav/>
        </>
    )
}

export default Stories;