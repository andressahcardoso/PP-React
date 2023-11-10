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
  const [showImagePopup, setShowImagePopup] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [filteredPost, setFilteredPost] = useState([]);
  // const [totalPost, setTotalPost] = useState(0);

  let displayedIndex = 0;
  let totalPost = 0;

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
    let teste = 0;

    const images = 'http://localhost:3001/uploads/';

    // Navigate functions
    function goToComment(id) {
      navigate(`/Comment/${id}`);
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

    
    useEffect(() => {
      const cards = document.querySelectorAll('.card');
      const observer = new IntersectionObserver(handleCardIntersection, {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      });
      
      cards.forEach((card) => {
        observer.observe(card);
      });
      
      return () => {
        observer.disconnect();
      };
    }, [displayedIndex]);

    
    const handleContinueClick = () => {
      // displayedIndex = 0
      // teste = 0
      console.log('aaaaaaaaaaaaaaaaaaaaa')
      endIndex += 4;
      console.log('endIndex :', endIndex);
      let newFilteredPost = posts.filter((item, index) => index >= startIndex && index <= endIndex);
      setFilteredPost(newFilteredPost)
      console.log('=================filteredPost :', newFilteredPost);
    };
  
    let startIndex = 0;
    let endIndex = 4;
   

    useEffect(() => {
      const filteredPost = posts.filter((item, index) => index >= startIndex && index <= endIndex);
      console.log('=========filteredPost :', filteredPost);
      setFilteredPost(filteredPost);
    }, [startIndex, endIndex, posts]);
   
  

    return (
      <MainDiv>

        
        {filteredPost.map((item) => {
        
        // console.log('-----------index :', teste);
        // console.log('-----------displayedIndex :', displayedIndex);
        // console.log('===============item :', item);

        // function continue() {
        //   index = 0;
        // }

              displayedIndex += 1;
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