import { Color, UserSection, UserInformations, TextDiv, Num, Text, ImgDiv, UserImg, UserText, Account, Description, BtnDiv, EditBtn, ReportBtn, OptionDiv, P, PostSection, DivImage, PostImage } from "./UserAccount.jsx";

// Components
import Nav from '../Nav/Nav.js'

// Images
import userImage from '../../assets/picture2.png'
import post1 from '../../assets/post1.png'
import post2 from '../../assets/post2.png'
import post3 from '../../assets/post3.png'
import post4 from '../../assets/post4.png'
import { useNavigate } from "react-router-dom";

function UserAccount() {

    const navigate = useNavigate();

    function goToUserSettings() {
        navigate('/User/Settings')
    }

    function goToReport() {
        navigate('/Report')
    }
    return (
        <>
        <Color>⠀⠀</Color>

        <UserSection>
            <UserInformations>
                <TextDiv>
                    <Num>200</Num>
                    <Text>seguindo</Text>
                </TextDiv>
                <ImgDiv>
                    <UserImg src={userImage}/>
                </ImgDiv>
                <TextDiv>
                    <Num>325</Num>
                    <Text>seguidores</Text>
                </TextDiv>
            </UserInformations>

            <UserText>
                <Account>@usuario_exemplo</Account>
                <Description>usuario exemplo texto de descrição do perfil de usuário. Imagem e vídeo.</Description>
            </UserText>

            <BtnDiv>
                <EditBtn onClick={goToUserSettings}>Editar perfil</EditBtn>
                <ReportBtn onClick={goToReport}>Relatório</ReportBtn>
            </BtnDiv>
            
            <OptionDiv>
                <P>Tudo</P>
                <P>Fotos</P>
                <P>Vídeos</P>
            </OptionDiv>

            <PostSection>
                <DivImage>
                    <PostImage src={post1}/>
                </DivImage>

                <DivImage>
                    <PostImage src={post2}/>
                </DivImage>
        
                <DivImage>
                    <PostImage src={post3}/>
                </DivImage>

                <DivImage>
                    <PostImage src={post4}/>
                </DivImage>
            </PostSection>

        </UserSection>

        <Nav/>
        </>
    )
}

export default UserAccount;