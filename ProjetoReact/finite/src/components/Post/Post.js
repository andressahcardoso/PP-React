import { PostContainer, Img, ImgProfile, Profile, PersonName, PersonProfile, Interaction, DivBtn, Text, ImgIcon, ImgIconRight } from "./Post.jsx";

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











    const navigate = useNavigate();

    const images = 'http://localhost:3001/uploads/';

    // Navigate functions
    function goToComment() {
      navigate('/Comment');
    }

    // Hooks
    const [cardsViewed, setCardsViewed] = useState(0); 
  
  
    useEffect(() => {
      // Configurar o IntersectionObserver para rastrear os cards
      const cards = document.querySelectorAll('.card'); // Certifique-se de adicionar a classe "card" aos elementos dos cards
      const observer = new IntersectionObserver(handleCardIntersection, {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      });
      
      cards.forEach((card) => {
        observer.observe(card);
      });
  
      return () => {
        observer.disconnect(); // Desconectar o observador quando o componente for desmontado
      };
    }, []);
    
    function handleCardIntersection(entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCardsViewed((prevCardsViewed) => prevCardsViewed + 1);
          observer.unobserve(entry.target);
        }
      });
    }
  
    return (
      <>
        {posts.map((item, index) => {
          return (
            <PostContainer key={index} className="card"
              onClick={() => openImagePopup(images + item.post_image)}>
              <Profile>
                <ImgProfile src={PersonImg} />
                <div>
                  <PersonName>{item.name}</PersonName>
                  <PersonProfile>{item.location}</PersonProfile>
                </div>
              </Profile>
              <Img src={images + item.post_image} />
  
              <Interaction>
                <DivBtn>
                  <ImgIcon onClick={goToComment} src={comment} />
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
          );
        })}

        {showImagePopup && (
          <ImagePopup imageUrl={selectedImage} onClose={closeImagePopup} />
          )}
      </>
    );
  }
  
  export default Post;