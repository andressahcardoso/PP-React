import { AddPostComponent, OptionButton, Publication, Stories, PostDiv, InputImg, PostImg, Text, Input, SelectContainer, DivConclued, Conclued, ImgConclued, FinalDiv} from "./AddPost.jsx";

// React Router
import React, { useState, useEffect } from 'react';

// Components
import MainHeader from "../MainHeader/MainHeader";
import Nav from "../Nav/Nav";

// Icon
import imgConclued from '../../assets/Icons/concluedIcon.svg'
import selectedImage2 from '../../assets/Icons/uploadIcon.svg'


function AddPost() {
    const [selectedImage, setSelectedImage] = useState(null);

     // Definir imagem padrão de início
     useEffect(() => {
        // URL da imagem inicial
        const initialImageUrl = selectedImage2;
        setSelectedImage(initialImageUrl);
      }, []);

    const handleImageClick = () => {
        // Ativar click no input que está oculto
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

        return (
            <>
                <MainHeader title='Nova Publicação'/>
                
                <AddPostComponent>
                    <OptionButton>
                        <Publication>Publicação</Publication>
                        <Stories>Stories</Stories>
                    </OptionButton>


                    <PostDiv onClick={handleImageClick}>
                        <InputImg type="file" accept="image/*" onChange={handleImageChange} id="imageInput"/>
                        {selectedImage && (
                            <div>
                                <PostImg src={selectedImage} alt="Imagem selecionada" />
                            </div>
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

                        <DivConclued>
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