import { PostContainer, Img, MainDiv, ImgProfile, Profile, ButtonContinue, DivButton, TitleInfo, TextInfo, Alert, PersonName, PersonProfile, Interaction, DivBtn, Text, ImgIcon, ImgIconRight } from "./Post.jsx";

// React 
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

// Images
import comment from '../../assets/MenuIcons/comment.svg'
import likeSimple from '../../assets/MenuIcons/heart-regular.svg'
import likeFull from '../../assets/MenuIcons/heart-solid.svg'
import send from '../../assets/MenuIcons/send.svg'
import save from '../../assets/MenuIcons/save.svg'
import PersonImg from '../../assets/Icons/user.svg'

import ImagePopup from './popUp.js'

// Api
import { api } from "../../services/api";


function Post({posts}) {
  const navigate = useNavigate();
  
  // Hooks
  const [showImagePopup, setShowImagePopup] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [filteredPost, setFilteredPost] = useState([]);
  
  let totalPost = 0;
  let PostViewed = [];
  console.log('PostViewed :', PostViewed);
  const images = 'http://localhost:3001/uploads/';
  
  // Função para abrir o pop-up
  const openImagePopup = (imageUrl) => {
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
  
  

  
  const [isLiked, setIsLiked] = useState();
  const userID = parseInt(localStorage.getItem('@Auth:id'))
  
  
  
  
  
  
  // Liked posts
  const [postsLike, setPostsLike] = useState([]);
  let like = false;
  let likePosts = [];

  
  // Salva no Banco
  const handleClick = async (postId) => {
    window.location.reload()
    try {
      const formData = {
        UserID: userID,
        PostID: postId,
      };

      await api.post('/likePost', formData);
      // Após o clique, busca o novo status do like
      // fetchLikeStatus(postId);

      try {
        const response = await api.post('/listLiked', {UserID: userID});
        const postList = response.data.data;
        postList.map(f => {
          if (f.isEnabled.data[0] === 1){
            likePosts.push(f.PostID)
            setPostsLike(likePosts);
          }
        })
    } catch (err) {
        console.error(err);
    }
    } catch (err) {
      console.error(err);
    }
  };

  

    useEffect(() => {
      likePosts = []

        const fetchData = async () => {
            try {
                const response = await api.post('/listLiked', {UserID: userID});
                const postList = response.data.data;
                postList.map(f => {
                  if (f.isEnabled.data[0] === 1){
                    likePosts.push(f.PostID)
                    setPostsLike(likePosts);
                  }
                })
            } catch (err) {
                console.error(err);
            }
        };
        fetchData();
    }, []);

  
  
  
  return (
    <MainDiv>        
      {filteredPost.map((item) => {
        totalPost += 1; 
        PostViewed.push(item.post_id)
        localStorage.setItem('PostViewed', PostViewed);

        // postId = item.post_id


        if (postsLike.includes(item.post_id)) {
          like = true;
        } else {
          like = false;
        }
       

        return (
          <PostContainer key={item.post_id} className="card">
            <Profile>
              <ImgProfile src={images + item.picture} />
              <div>
                <PersonName>{item.name}</PersonName>
                <PersonProfile>{item.location}</PersonProfile>
              </div>
            </Profile>
    
            <Img src={images + item.post_image} onClick={() => openImagePopup(images + item.post_image)}/>
    
            <Interaction>
              <DivBtn>
                <ImgIcon onClick={() => goToComment(item.post_id)} postData={item}  src={comment} />
                <Text>{item.comment_count}</Text>
                <ImgIcon src={like ? likeFull : likeSimple} onClick={() => handleClick(item.post_id)} />
                <Text>{item.likes_count}</Text>
              </DivBtn>
    
              <DivBtn>
                <ImgIconRight src={send} />
                <ImgIconRight src={save} />
              </DivBtn>
            </Interaction>
            </PostContainer>
          )
      })}
          
      {filteredPost.length > 4 && (
        <DivButton key="continueButton" onClick={handleContinueClick}>
          <Alert>!</Alert>
          <div>
            <TitleInfo>{'Você visualizou ' + totalPost + ' posts'}</TitleInfo>
            <TextInfo>Para prosseguir clique aqui</TextInfo>
          </div>
        </DivButton>
      )}
    
      {showImagePopup && (
        <ImagePopup imageUrl={selectedImage} onClose={closeImagePopup} />
        )}
    </MainDiv>
  );
}
  
export default Post;