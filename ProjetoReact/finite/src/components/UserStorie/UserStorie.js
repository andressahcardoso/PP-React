import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../Stories/UserContext.js';
import { ImgDiv, StorieImg, Img, Profile, ImgProfile, PersonName, PersonProfile, NextImage, ImgNext } from './UserStorie.jsx';

function UserStorie() {
    const { userData } = useUserContext();

    const navigate = useNavigate();

    function goToStories() {
      navigate('/Stories')
    }

    return (
      <ImgDiv>
      {userData && (
         <Profile>
                <ImgProfile src={userData.user}/>
                <div>
                    <PersonName>{userData.person}</PersonName>
                    <PersonProfile>{userData.account}</PersonProfile>
                </div>
            </Profile>
           )}
        <StorieImg>
           <Img src={userData.imagem}/>
        </StorieImg>

        <NextImage>
          <ImgNext onClick={goToStories} src={userData.next}/>
        </NextImage>
       
      
       
      </ImgDiv>
    )
}

export default UserStorie;

