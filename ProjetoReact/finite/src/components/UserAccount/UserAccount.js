import { Color, UserSection, UserInformations, TextDiv, Num, Text, ImgDiv, UserImg, UserText, Account, Description, BtnDiv, EditBtn, ReportBtn, OptionDiv, P, PostSection, DivImage, PostImage } from "./UserAccount.jsx";
import { PostImg } from "./UserAccount.jsx";

// React
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Components
import Nav from '../Nav/Nav.js'
import ImagePopup from '../Post/popUp.js'

// Api
import { api } from "../../services/api";

// Theme
import { useTheme } from "../../hooks/useTheme";


function UserAccount() {
    const navigate = useNavigate();

    // Navigate functions
    function goToUserSettings() {
        navigate('/User/Settings')
    }

    function goToReport() {
        navigate('/Report')
    }
    
    
    // Hooks
    const [objectData, setObjectData] = useState({});
    const [postsUser, setPostsUser] = useState();
    const [showImagePopup, setShowImagePopup] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

    const userId = localStorage.getItem('@Auth:id')

    const images = 'http://localhost:3001/uploads/';


    // Theme definition
    const {theme} = useTheme();


    // UseEffect Onload
    useEffect(() => {
        const fetchData = async () => {                 
            try{
                const postData = await api.post("/userInfo", {userId: userId})
                const userPost = await api.post("/userPosts", {userId: userId})
                setPostsUser(userPost.data.data)
                setObjectData(postData.data.data[0]);
            } catch (err) {
                console.error(err);
            }
        };

        fetchData();
    }, []); 
    
    

    // Função para abrir o pop-up
    const openImagePopup = (imageUrl) => {
        setSelectedImage(imageUrl);
        setShowImagePopup(true);
    };
  
    // Função para fechar o pop-up
    const closeImagePopup = () => {
        setSelectedImage('');
        setShowImagePopup(false);
    };


    return (
        <>
            <Color>⠀⠀</Color>

            <UserSection style={{ background: theme.background, color: theme.color}}>
                <UserInformations>
                    <TextDiv>
                        <Num>{objectData.following}</Num>
                        <Text>seguindo</Text>
                        </TextDiv>
                        <ImgDiv >
                            <PostImg src={images + objectData.userPicture} alt="Imagem selecionada" />
                        </ImgDiv>
                        <TextDiv>
                            <Num>{objectData.followed}</Num>
                            <Text>seguidores</Text>
                    </TextDiv>
                </UserInformations>

                <UserText>
                    <Account>{'@'+objectData.userName}</Account>
                    <Description>{objectData.description}</Description>
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
                    {postsUser && postsUser.map((item, index) => (
                        <DivImage key={index}>
                            <PostImage src={images + item.image} alt={`Post ${index + 1}`} onClick={() => openImagePopup(images + item.image)} />
                        </DivImage>
                    ))}
                </PostSection>

            </UserSection>

            <Nav/>

            {showImagePopup && (
          <ImagePopup imageUrl={selectedImage} onClose={closeImagePopup} />
          )}
        </>
    )
}

export default UserAccount;