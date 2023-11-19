import { AddPostComponent, OptionButton, Publication, Stories, PostDiv, InputImg, PostImg, Text, Input, SelectContainer, DivConclued, Conclued, ImgConclued, FinalDiv} from "./AddStories.jsx";

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

function AddStories() {
    const navigate = useNavigate();
    
    function goToCreatePost() {
        navigate('/Add/Post')
    }
    

    // Hooks
    const [image, setImage] = useState('');
    const [preview, setPreview] = useState('');
    const [location, setLocation] = useState('');
    const [time, setTime] = useState('');


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
    
    
    function handleImageChange(e) {
        setImage(e.target.files[0]);
        setPreview(URL.createObjectURL(e.target.files[0]));
    }

    const handleImageClick = () => {
        // Ativar click no input que está oculto.
        document.getElementById('imageInput').click();        
    };
    
  
    // Form Submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        let formData = new FormData();
        formData.append('location', location);
        formData.append('time', time)
        formData.append('userId', localStorage.getItem('@Auth:id'));
        formData.append('file', image);

        try {
            const response = await api.post('/saveStories', formData);
            navigate('/Feed')
            console.log('Stories criado com sucesso:', response.data);
        } catch (error) {
            console.error('Erro ao criar o stories:', error);
        }
    };
    

    return (
        <div style={{ background: theme.background, color: theme.color}}>
            <MainHeader title='Nova Publicação'/>
                
            <AddPostComponent>
                <OptionButton>
                    <Publication onClick={goToCreatePost}>Publicação</Publication>
                    <Stories>Stories</Stories>
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

                    <Text>Tempo de duração</Text>
                        
                    <SelectContainer>
                        <select type="text"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}>
                            <option id="mainOption" value="Opções de categoria">Opções de tempo</option>
                            <option value="30">30 min</option>
                            <option value="12">12 horas</option>
                            <option value="24">24 horas</option>
                            <option value="48">48 horas</option>
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

export default AddStories;