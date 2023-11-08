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

// Api
import { api } from "../../services/api";

function AddPost() {
    const navigate = useNavigate();

    // Hooks
    const [image, setImage] = useState('');
    const [preview, setPreview] = useState('');
    const [location, setLocation] = useState('');
    const [category, setCategory] = useState('');
    const [content, setContent] = useState('');

    useEffect(() => {
        // Define a imagem inicial.
        const initialImageUrl = selectedImage2;
        setPreview(initialImageUrl);
      }, []); 
    
      function handleImageChange(e) {
        setImage(e.target.files[0]);
        setPreview(URL.createObjectURL(e.target.files[0]));
      }
    
      useEffect(() => {
        console.log('image', image);
      }, [image]);
    
      useEffect(() => {
        console.log('preview', preview);
      }, [preview]);


    const handleSubmit = async (e) => {
        // Evita que o envio do formulário seja tratado de maneira padrão pelo navegador e faz com que você possa determinar as ações futuras.
        e.preventDefault();
        console.log(image)
        
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

    const handleImageClick = () => {
        // Ativar click no input que está oculto.
        document.getElementById('imageInput').click();        
    };

    return (
        <>
            <MainHeader title='Nova Publicação'/>
                
            <AddPostComponent>
                <OptionButton>
                    <Publication>Publicação</Publication>
                    <Stories>Stories</Stories>
                </OptionButton>

                <PostDiv onClick={handleImageClick} >
                    <InputImg type="file" 
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
                </PostDiv>

                <div>
                    <Text>Adicionar Localização</Text>
                    <Input type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}/>

                    <Text>Adicionar Legenda</Text>
                    <Input type="text"
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
        </>
    )
}

export default AddPost;