import { Color, UserSection, UserInformations, TextDiv, Num, Text, ImgDiv, UserImg, UserText, Account, Description, BtnDiv, EditBtn, ReportBtn, OptionDiv, P, PostSection, DivImage, PostImage } from "./UserAccount.jsx";

// React
import { useNavigate } from "react-router-dom";

// Components
import Nav from '../Nav/Nav.js'

// Images
import userImage from '../../assets/Icons/user.svg'
import post1 from '../../assets/post1.png'
import post2 from '../../assets/post2.png'
import post3 from '../../assets/post3.png'
import post4 from '../../assets/post4.png'
import { useEffect, useState } from "react";

// Api
import { api } from "../../services/api";
import { PostImg } from "./UserAccount.jsx";

import ImagePopup from '../Post/popUp.js'

import { useTheme } from "../../hooks/useTheme";

function UserAccount() {
    const {theme} = useTheme();

    const userId = localStorage.getItem('@Auth:id')
    const navigate = useNavigate();

    // Navigate functions
    function goToUserSettings() {
        navigate('/User/Settings')
    }

    function goToReport() {
        navigate('/Report')
    }

    // Hooks
    const [image, setImage] = useState('');
    const [preview, setPreview] = useState('');
    const [objectData, setObjectData] = useState({});
    const [postsUser, setPostsUser] = useState();

    const images = 'http://localhost:3001/uploads/';

    useEffect(() => {

        const fetchData = async () => {                 
            try{
                const postData = await api.post("/userInfo", {userId: userId})
                const userPost = await api.post("/userPosts", {userId: userId})
                console.log('userPost :', userPost.data.data);
                setPostsUser(userPost.data.data)
                setObjectData(postData.data.data[0]);
                console.log('postData.data.data[0] :', postData.data.data[0]);
                
            } catch (err) {
                console.error(err);
            }
        };

        fetchData();
        console.log('objectData :', objectData);
       
      }, []); 
    
    const handleImageChange = async (e) => {
        setPreview(URL.createObjectURL(e.target.files[0]));

        e.preventDefault();
        
        let formData = new FormData();
        formData.append('userId', localStorage.getItem('@Auth:id'));
        formData.append('file', e.target.files[0]);

        
        try {

            const response = await api.post('/user', formData);
      
            console.log('Post criado com sucesso:', response.data);
        } catch (error) {
            console.error('Erro ao criar o post:', error);
        }
    }
    
      useEffect(() => {
        console.log('image', image);
      }, [image]);
    
      useEffect(() => {
        console.log('===========preview', preview);
      }, [preview]);

      const [showImagePopup, setShowImagePopup] = useState(false);
      const [selectedImage, setSelectedImage] = useState('');

      // Função para abrir o pop-up
  const openImagePopup = (imageUrl) => {
    console.log('imageUrl :', imageUrl);
      setSelectedImage(imageUrl);
      setShowImagePopup(true);
    };
  
    // Função para fechar o pop-up
    const closeImagePopup = () => {
      setSelectedImage('');
      setShowImagePopup(false);
    };

    

    const handleImageClick = () => {
        // Ativar click no input que está oculto.
        document.getElementById('imageInput').click();        
    };


    return (
        <>
            <Color>⠀⠀</Color>

            <UserSection style={{ background: theme.background, color: theme.color}}>
                <UserInformations>
                    <TextDiv>
                        <Num>200</Num>
                        <Text>seguindo</Text>
                        </TextDiv>
                        <ImgDiv onClick={handleImageClick}>
                            <UserImg type="file" 
                            name="image" 
                            accept="image/*" 
                            multiple={false} 
                            // value={image}
                            onChange={ handleImageChange }  id="imageInput"/>
                            {/* onChange={ (e) => setImage(e.target.files[0]) }  id="imageInput"/> */}
                            {/* onChange={ (e) => setImage(URL.createObjectURL(e.target.files[0])) }  id="imageInput"/> */}
                            <PostImg src={userImage} alt="Imagem selecionada" />

                    {/* {preview && (
                        <div>
                            <PostImg src={preview} alt="Imagem selecionada" />
                            {/* <img src={image} width="50px" height="50px"/> */}
                        {/* </div> */}
                    {/* )}  */}
                        </ImgDiv>
                        <TextDiv>
                            <Num>325</Num>
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
                        // console.log('item', item)
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