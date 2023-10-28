import { HeaderComponent, AddPostComponent, OptionButton, Publication, Stories, TimeDiv, Time, Num, Text, Text2, TextDiv, PostDiv, Num2, Div, Img} from "./Report.jsx";

// React Router
import { useNavigate } from "react-router-dom";

// Components
import Nav from "../Nav/Nav";

// Icons
import previous from '../../assets/Icons/backIcon.svg'
import rankingIcon from '../../assets/rankingIcon.svg'
import post from '../../assets/Icons/post.svg'


function Report() {

    const navigate = useNavigate();

    function goToRanking() {
        navigate('/Ranking')
    }

    function goToBack() {
        navigate(-1)
    }

    return (
            <>
                <HeaderComponent>
                    <img onClick={goToBack} src={previous} alt="Relatório"></img>
                    <h2>Relatório</h2>
                    <img onClick={goToRanking} src={rankingIcon} alt="Ranking"></img>
                </HeaderComponent>
                
                <AddPostComponent>
                    <OptionButton>
                        <Publication>Hoje</Publication>
                        <Stories>Semana</Stories>
                    </OptionButton>

                    <TimeDiv>
                        <Time>
                            <Num>1:15</Num>
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
            </>
    )
}

export default Report;