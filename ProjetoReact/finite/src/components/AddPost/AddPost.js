import { AddPostComponent, OptionButton, Publication, Stories, PostDiv, InputImg, PostImg, Text, Input, SelectContainer, DivConclued, Conclued, ImgConclued, FinalDiv} from "./AddPost.jsx";

// React Router
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

// Components
import MainHeader from "../MainHeader/MainHeader";
import Nav from "../Nav/Nav";

// Icon
import imgConclued from '../../assets/Icons/concluedIcon.svg'
import selectedImage2 from '../../assets/Icons/uploadIcon.svg'
import selectedImage3 from '../../assets/Icons/addPost.PNG'

// Api
import { api } from "../../services/api";

// Theme
import { useTheme } from "../../hooks/useTheme";

function AddPost() {
    const navigate = useNavigate();
    
    function goToCreateStories() {
        navigate('/Add/Stories')
    }

    // Hooks
    const [image, setImage] = useState('');
    const [preview, setPreview] = useState('');
    const [location, setLocation] = useState('');
    const [category, setCategory] = useState('');
    const [content, setContent] = useState('');


    // Theme definition
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
        // Define a imagem inicial.
        const initialImageUrl = darkMode ? selectedImage3 : selectedImage2;
        setPreview(initialImageUrl);
    }, []); 
    
    
    const handleImageClick = () => {
        // Ativar click no input que está oculto.
        document.getElementById('imageInput').click();        
    };

    function handleImageChange(e) {
        setImage(e.target.files[0]);
        setPreview(URL.createObjectURL(e.target.files[0]));
    }
    
    // Form Submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        let formData = new FormData();
        formData.append('location', location);
        formData.append('content', content);
        formData.append('category', category)
        formData.append('userId', localStorage.getItem('@Auth:id'));
        formData.append('file', image);
      
        try {
            const response = await api.post('/createPost', formData);
            navigate('/Feed')
            console.log('Post criado com sucesso:', response.data);
        } catch (error) {
            console.error('Erro ao criar o post:', error);
        }
    };
    

    return (
        <div style={{ background: theme.background, color: theme.color}}>
            <MainHeader title='Nova Publicação'/>
                
            <AddPostComponent>
                <OptionButton>
                    <Publication>Publicação</Publication>
                    <Stories onClick={goToCreateStories}>Stories</Stories>
                </OptionButton>

                <PostDiv onClick={handleImageClick} >
                    <InputImg type="file" 
                            name="image" 
                            accept="image/*" 
                            multiple={false} 
                            onChange={ handleImageChange }  id="imageInput"/>
                    {preview && (
                        <div>
                            <PostImg src={preview} alt="Imagem selecionada" />
                        </div>
                    )}
                </PostDiv>

                <div>
                    <Text>Adicionar Localização</Text>
                    <Input style={{ background: theme.background, color: theme.color}}  type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}/>

                    <Text>Adicionar Legenda</Text>
                    <Input style={{ background: theme.background, color: theme.color}}  type="text"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}/>

                    <Text>Adicionar Categoria</Text>
                        
                    <SelectContainer>
                        <select type="text"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}>
                            <option id="mainOption" value="Opções de categoria">Opções de categoria</option>
                            <option value="Diversos">Diversos</option>
                            <option value="Músicas">Músicas</option>
                            <option value="Atividades e Esporte">Atividades e Esporte</option>
                            <option value="Natureza e Paisagem">Natureza e Paisagem</option>
                            <option value="Educação">Educação</option>
                        </select>
                    </SelectContainer>

                    <DivConclued onClick={handleSubmit}>
                        <Conclued>Publicar⠀</Conclued>
                        <ImgConclued src={imgConclued}/>
                    </DivConclued>

                    <FinalDiv>⠀⠀</FinalDiv>
                </div>
            </AddPostComponent>

            <Nav/>
        </div>
    )
}

export default AddPost;