import { PostContainer, Img, MainDiv, ImgProfile, Profile, ButtonContinue, DivButton, TitleInfo, TextInfo, Alert, PersonName, PersonProfile, Interaction, DivBtn, Text, ImgIcon, ImgIconRight } from "./Post.jsx";

// React 
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

// Images
import comment from '../../assets/MenuIcons/comment.svg'
import like from '../../assets/MenuIcons/like.svg'
import send from '../../assets/MenuIcons/send.svg'
import save from '../../assets/MenuIcons/save.svg'
import PersonImg from '../../assets/Icons/user.svg'

import ImagePopup from './popUp.js'

function Post({posts}) {
  const navigate = useNavigate();
  
  // Hooks
  const [showImagePopup, setShowImagePopup] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [filteredPost, setFilteredPost] = useState([]);

  let totalPost = 0;
  const images = 'http://localhost:3001/uploads/';
  
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


  // Navigate functions
  function goToComment(id) {
    navigate(`/Comment/${id}`);
  }


  // Determinar array de filtro de posts a cada 5 posts visualizados.
  const handleContinueClick = () => {
    setEndIndex(endIndex+5);
    let newFilteredPost = posts.filter((item, index) => index >= startIndex && index <= endIndex);
    setFilteredPost(newFilteredPost)
  };
  
  const [startIndex, setStartIndex] =  useState(0);
  const [endIndex, setEndIndex] = useState(4);
   

  useEffect(() => {
    const filteredPost = posts.filter((item, index) => index >= startIndex && index <= endIndex);
    setFilteredPost(filteredPost);
  }, [startIndex, endIndex, posts]);
   
  

  return (
    <MainDiv>        
      {filteredPost.map((item) => {
        totalPost += 1; 

        return (
          <PostContainer key={item.post_id} className="card">
            <Profile>
              <ImgProfile src={PersonImg} />
              <div>
                <PersonName>{item.name}</PersonName>
                <PersonProfile>{item.location}</PersonProfile>
              </div>
            </Profile>
    
            <Img src={images + item.post_image} onClick={() => openImagePopup(images + item.post_image)}/>
    
            <Interaction>
              <DivBtn>
                <ImgIcon onClick={() => goToComment(item.post_id)} postData={item}  src={comment} />
                <Text>10</Text>
                <ImgIcon src={like} />
                <Text>122</Text>
              </DivBtn>
    
              <DivBtn>
                <ImgIconRight src={send} />
                <ImgIconRight src={save} />
              </DivBtn>
            </Interaction>
            </PostContainer>
          )
      })}

          
      <DivButton key="continueButton" onClick={handleContinueClick}>
        <Alert>!</Alert>
        <div>
          <TitleInfo>{'Você visualizou ' +  totalPost + ' posts'}</TitleInfo>
          <TextInfo>Para prosseguir clique aqui</TextInfo>
        </div>
      </DivButton>
    
      {showImagePopup && (
        <ImagePopup imageUrl={selectedImage} onClose={closeImagePopup} />
        )}
    </MainDiv>
  );
}
  
export default Post;