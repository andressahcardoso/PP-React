import { AddPostComponent, OptionButton, Publication, Stories, PostDiv, InputImg, PostImg, Text, Input, SelectContainer, DivConclued, Conclued, ImgConclued, FinalDiv} from "./AddPost.jsx";

// React Router
import React, { useState, useEffect } from 'react';

// Components
import MainHeader from "../MainHeader/MainHeader";
import Nav from "../Nav/Nav";

// Icon
import imgConclued from '../../assets/Icons/concluedIcon.svg'
import selectedImage2 from '../../assets/Icons/uploadIcon.svg'

// Api
import { api } from "../../services/api";

function AddPost() {
    const [image, setImage] = useState(null);
    const [location, setLocation] = useState('');
    const [category, setCategory] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = async (e) => {
        // Evita que o envio do formulário seja tratado de maneira padrão pelo navegador e faz com que você possa determinar as ações futuras.
        e.preventDefault();
        
        // Pega o valor do userId para enviar para o Back.
        const userId = parseInt(localStorage.getItem('@Auth:id'))
        
        
        try {
            const response = await api.post('/createPost', {
              image: image,
              content: content,
              location: location,
              userId: userId,
              category: category
            });
      
            console.log('Post criado com sucesso:', response.data);
        } catch (error) {
            console.error('Erro ao criar o post:', error);
        }
    };

    //  Definir imagem padrão de início.
     useEffect(() => {
        // URL da imagem inicial.
        const initialImageUrl = selectedImage2;
        setImage(initialImageUrl);
      }, []);

    const handleImageClick = () => {
        // Ativar click no input que está oculto.
        document.getElementById('imageInput').click();        
    };
  
    const handleImageChange = (e) => {
        // Extrai o primeiro arquivo selecionado pelo usuário.
        const file = e.target.files[0];
    
        if (file) {
            //  Instância do objeto FileReader, que é usada para ler os dados do arquivo selecionado.
            const reader = new FileReader();

            // Quando a leitura do arquivo for concluída, um evento (chamado event) será passado e conterá os dados da imagem.
            reader.onload = (event) => {
                setImage(event.target.result);
            };
        
            //  A leitura do arquivo/imagem selecionada é iniciada como uma URL de dados.
            reader.readAsDataURL(file);
        }
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
                    <InputImg type="file" accept="image/*" onChange={handleImageChange} id="imageInput"/>
                    {image && (
                        <div>
                            <PostImg src={image} alt="Imagem selecionada" />
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