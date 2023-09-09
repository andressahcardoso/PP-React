import MainHeader from "../MainHeader/MainHeader";
import Nav from "../Nav/Nav";
import Post from "../Post/Post";
import { AddPostComponent, OptionButton, Stories, Publication, PostDiv, PostImg, ImgDiv, Input, Text, SelectContainer, FinalDiv} from "./AddPost.jsx";

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Icon
import searchIcon from '../../assets/Icons/searchIcon.svg'


import selectedImage2 from '../../assets/Icons/uploadIcon.svg'

function AddPost() {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = () => {
      // Quando a div é clicada, ativar o clique no input oculto
      document.getElementById('imageInput').click();
    };
  
    const handleImageChange = (e) => {
      const file = e.target.files[0];
  
      if (file) {
        const reader = new FileReader();
  
        reader.onload = (event) => {
          setSelectedImage(event.target.result);
        };
  
        reader.readAsDataURL(file);
      }
    };
  
    // Defina uma imagem inicial quando o componente for montado
    useEffect(() => {
      // URL da imagem inicial
      const initialImageUrl = selectedImage2;
  
      // Defina a imagem inicial
      setSelectedImage(initialImageUrl);
    }, []);
  
   
    return (
        <>
        <MainHeader title='Nova Publicação'/>
        
        <AddPostComponent>
            <OptionButton>
                <Link to="/Login"><Publication>Publicação</Publication></Link>
                <Link to='/Register/Informations'><Stories>Stories</Stories></Link>
            </OptionButton>


            <PostDiv onClick={handleImageClick}>
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    style={{ display: 'none' }}
                    id="imageInput"
                />
                {selectedImage && (
                    <ImgDiv>
                        <PostImg src={selectedImage} alt="Imagem selecionada" />
                    </ImgDiv>
                )}
            </PostDiv>

            <div>
                <Text>Adicionar Localização</Text>
                <Input/>

                <Text>Adicionar Legenda</Text>
                <Input/>

                <Text>Adicionar Categoria</Text>
                
                    <SelectContainer>
                        <select>
                            <option id="mainOption">Opções de categoria</option>
                            <option>Diversos</option>
                            <option>Músicas</option>
                            <option>Atividades e Esporte</option>
                            <option>Natureza e Paisagem</option>
                            <option>Educação</option>
                        </select>
                    </SelectContainer>

                    <FinalDiv>⠀⠀</FinalDiv>
            </div>
        </AddPostComponent>

        <Nav/>
        </>

    )
}

export default AddPost;