import { StorieSection, Storie, Div, StorieImgDiv, StorieImg, TextDiv, Profile, Account, ImgDate, DateText, Month } from "./Stories.jsx";

// Components
import MainHeader from "../MainHeader/MainHeader";
import Nav from "../Nav/Nav";

// Images
import storie1 from '../../assets/Storie/storie1.png'
import storie2 from '../../assets/Storie/storie2.png'
import storie3 from '../../assets/Storie/storie3.png'
import storie4 from '../../assets/Storie/storie4.png'
import storie5 from '../../assets/Storie/storie5.png'

// Icons
import DateIcon from '../../assets/Icons/line.svg'

function Stories() {
    return (
        <>
            <MainHeader title='Stories'/>

            <StorieSection>
                <Storie>
                    <Div>
                        <StorieImgDiv>
                            <StorieImg src={storie1} alt="Imagem storie"/>
                        </StorieImgDiv>
                        <TextDiv>
                            <Profile>Prabhas Raju</Profile>
                            <Account>@Praba_01</Account>
                        </TextDiv>
                    </Div>
                    <div>
                        
                        <DateText>26</DateText>
                        <ImgDate>
                            <img src={DateIcon} alt="Line Icon"/>
                        </ImgDate>
                        <Month>11</Month>
                    </div>
                </Storie>

                <Storie>
                    <Div>
                        <StorieImgDiv>
                            <StorieImg src={storie2} alt="Imagem storie"/>
                        </StorieImgDiv>
                        <TextDiv>
                            <Profile>Alice</Profile>
                            <Account>@alice_01</Account>
                        </TextDiv>
                    </Div>
                    <div>
                        
                        <DateText>26</DateText>
                        <ImgDate>
                            <img src={DateIcon} alt="Line Icon"/>
                        </ImgDate>
                        <Month>11</Month>
                    </div>
                </Storie>

                <Storie>
                    <Div>
                        <StorieImgDiv>
                            <StorieImg src={storie3} alt="Imagem storie"/>
                        </StorieImgDiv>
                        <TextDiv>
                            <Profile>Vini Souza</Profile>
                            <Account>@vini_02</Account>
                        </TextDiv>
                    </Div>
                    <div>
                        
                        <DateText>26</DateText>
                        <ImgDate>
                            <img src={DateIcon} alt="Line Icon"/>
                        </ImgDate>
                        <Month>11</Month>
                    </div>
                </Storie>


                <Storie>
                    <Div>
                        <StorieImgDiv>
                            <StorieImg src={storie4} alt="Imagem storie"/>
                        </StorieImgDiv>
                        <TextDiv>
                            <Profile>David</Profile>
                            <Account>@david_04</Account>
                        </TextDiv>
                    </Div>
                    <div>
                        
                        <DateText>25</DateText>
                        <ImgDate>
                            <img src={DateIcon} alt="Line Icon"/>
                        </ImgDate>
                        <Month>11</Month>
                    </div>
                </Storie>

                <Storie>
                    <Div>
                        <StorieImgDiv>
                            <StorieImg src={storie5} alt="Imagem storie"/>
                        </StorieImgDiv>
                        <TextDiv>
                            <Profile>Malu</Profile>
                            <Account>@malukitalu</Account>
                        </TextDiv>
                    </Div>
                    <div>
                        
                        <DateText>25</DateText>
                        <ImgDate>
                            <img src={DateIcon} alt="Line Icon"/>
                        </ImgDate>
                        <Month>11</Month>
                    </div>
                </Storie>
            </StorieSection>

            <Nav/>
        </>
    )
}

export default Stories;