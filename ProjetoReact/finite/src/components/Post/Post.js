import { PostContainer, Img, ImgProfile, Profile, PersonName, PersonProfile, Interaction, DivBtn, Text, ImgIcon, ImgIconRight } from "./Post.jsx";

// React Router
import { useNavigate } from 'react-router-dom';

// Images
import comment from '../../assets/MenuIcons/comment.svg'
import like from '../../assets/MenuIcons/like.svg'
import send from '../../assets/MenuIcons/send.svg'
import save from '../../assets/MenuIcons/save.svg'
import PersonImg from '../../assets/user.svg'
import { useEffect, useState } from "react";



function Post({posts}) {

    const navigate = useNavigate();
    const [cardsViewed, setCardsViewed] = useState(0); // Estado para armazenar o número de cards visualizados
    console.log('-------------------cardsViewed :', cardsViewed);
  
    function goToComment() {
      navigate('/Comment');
    }
  
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
            <PostContainer key={index} className="card">
              <Profile>
                <ImgProfile src={PersonImg} />
                <div>
                  <PersonName>exemplo</PersonName>
                  <PersonProfile>{item.post_content}</PersonProfile>
                </div>
              </Profile>
              <Img src={item.post_image} />
  
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
      </>
    );
  }
  
  export default Post;