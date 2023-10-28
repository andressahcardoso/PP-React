import { HeaderComponent, Settings, User, ImgDiv, Img, TextDiv, Icon, Text, Div, Title, Title2, Information, Icon2, Icon3 } from "./UserSettings.jsx";

// React Router
import { useNavigate } from "react-router-dom";

// Components
import Nav from "../Nav/Nav";

// Icons
import previous from '../../assets/Icons/backIcon.svg'
import edit from '../../assets/Icons/editIcon.svg'

// Images
import user from '../../assets/user4.svg'

function UserSettings() {

    const navigate = useNavigate();

    function goToBack() {
        navigate(-1)
    }

        return (
            <>
                <HeaderComponent>
                    <h2>Configurações do Perfil</h2>
                    <img onClick={goToBack} src={previous} alt="Back"></img>
                </HeaderComponent>

                <Settings>
                    <User>
                        <ImgDiv>
                            <Img src={user}/>
                        </ImgDiv>
                        <TextDiv>
                            <Icon src={edit}/>
                            <Title2>Alterar foto</Title2>
                        </TextDiv>
                    </User>

                    <Div>
                        <Title>Nome</Title>
                        <Information>
                            <Text>Usuário Exemplo</Text>
                            <Icon2 src={edit}/>
                        </Information>
                    </Div>

                    <Div>
                        <Title>Nome de usuário</Title>
                        <Information>
                            <Text>@usuario_exemplo</Text>
                            <Icon2 src={edit}/>
                        </Information>
                    </Div>

                    <Div>
                        <Title>Descrição</Title>
                        <Information>
                            <Text>usuário exemplo texto de descrição do perfilde usuário. Imagem e video.</Text>
                            <Icon3 src={edit}/>
                        </Information>
                    </Div>
                </Settings>
                <Nav/>
            </>
        )
}

export default UserSettings;