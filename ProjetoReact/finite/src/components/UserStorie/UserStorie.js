import { ImgDiv, StorieImg, Img, Profile, ImgProfile, PersonName, PersonProfile, NextImage, ImgNext } from './UserStorie.jsx';

// React
import { useNavigate, useParams } from 'react-router-dom';

// Context
import { useEffect, useState } from 'react';

// Api
import { api } from "../../services/api";


function UserStorie() {
  const navigate = useNavigate();

  // Navigate functions
  function goToStories() {
    navigate('/Stories')
  }


  // Hooks
  const [storie, setStorieInfo] = useState([]);

  const images = 'http://localhost:3001/uploads/';

  const {id} = useParams([]);


  // UseEffect Onload
  useEffect(() => {
    const fetchData = async () => {                 
        try{
            const storieData = await api.post("/getStoriesById", {id: id})
            setStorieInfo(storieData.data)
            console.log('storieData :', storieData.data[0]);
            
        } catch (err) {
            console.error(err);
        }
    };
    fetchData();
}, []);

  
    return (
    <ImgDiv>
      {storie.map((item) => {
        return(
          <>
            <Profile>
              <ImgProfile src={images + item.userPicture }/>
              <div>
                <PersonName>{item.name}</PersonName>
                <PersonProfile>{'@' + item.userName}</PersonProfile>
              </div>
            </Profile>

          
          <StorieImg>
            <Img src={images + item.image}/>
          </StorieImg>

          <NextImage>
            <ImgNext onClick={goToStories} src={images + item.image}/>
          </NextImage>
          </>
        )
        })}
    </ImgDiv>
  ) 
}

export default UserStorie;

