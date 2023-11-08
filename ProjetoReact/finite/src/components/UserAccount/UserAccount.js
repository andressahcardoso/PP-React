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
    const [image, setImage] = useState('');
    const [preview, setPreview] = useState('');
    const id = localStorage.getItem('@Auth:id')

    useEffect(() => {

       
        
        // Define a imagem inicial.
        console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
        console.log('==========response.data :', preview);
        const initialImageUrl = userImage;
        setPreview(initialImageUrl);
       
      }, []); 
    
    const handleImageChange = async (e) => {
        setPreview(URL.createObjectURL(e.target.files[0]));

        e.preventDefault();
        console.log(image)

        const id = localStorage.getItem('@Auth:id')
        
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


    

    const handleImageClick = () => {
        // Ativar click no input que está oculto.
        document.getElementById('imageInput').click();        
    };


    return (
        <>
            <Color>⠀⠀</Color>

            <UserSection>
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
                    {preview && (
                        <div>
                            <PostImg src={preview} alt="Imagem selecionada" />
                            {/* <img src={image} width="50px" height="50px"/> */}
                        </div>
                    )}
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