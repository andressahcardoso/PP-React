import { StorieSection, Storie, Div, StorieImgDiv, StorieImg, TextDiv, Profile, Account, ImgDate, DateText, Month } from "./Stories.jsx";

// React Router
import { useNavigate } from 'react-router-dom';

// Components
import MainHeader from "../MainHeader/MainHeader";
import Nav from "../Nav/Nav";

// Images
import storie1 from '../../assets/Storie/storie1.png'
import storie2 from '../../assets/Storie/storie2.png'
import storie3 from '../../assets/Storie/storie3.png'
import storie4 from '../../assets/Storie/storie4.png'
import storie5 from '../../assets/Storie/storie5.png'
import user1 from '../../assets/user1.svg'
import user2 from '../../assets/user2.svg'
import user3 from '../../assets/user3.svg'
import user4 from '../../assets/user4.svg'

// Icons
import DateIcon from '../../assets/Icons/line.svg'


// Api
import { api } from "../../services/api";


import { useUserContext } from './UserContext.js';
import { useEffect, useState } from "react";

import { useTheme } from "../../hooks/useTheme";

function Stories() {
    const {theme} = useTheme();

    const navigate = useNavigate();

    const images = 'http://localhost:3001/uploads/';

    const [data, setData] = useState([]);
    // const { setUserData } = useUserContext();

    // function goToUserStorie(personVar, accountVar, userVar, storieVar, nextVar) {
    //     const userData = { person: personVar, account: accountVar, user: userVar, imagem: storieVar, next: nextVar }; // Substitua pelos dados que deseja passar
    //     console.log('userData :', userData);
    //     // setUserData(userData);
    //     navigate(`/User/Storie`);
    // }

    // Navigate functions
    function goToUserStorie(id) {
        navigate(`/User/Storie/${id}`);
    }

    useEffect(() => {
        
  
          const fetchData = async () => {
              try {
                  const response = await api.get('/getStories');
                  setData(response.data)
                  console.log('response :', response.data);
                  
              } catch (err) {
                  console.error(err);
              }
          };
          fetchData();
      }, []);
  

    return (
        <div style={{ background: theme.background, color: theme.color}}>
            <MainHeader title='Stories'/>

            <StorieSection>

            {data.map((item) => {

                const firstName = item.name.split(' ')[0]
                const month = item.startDate.split('-')[1]
                const dateTemp = item.startDate.split('-')
                const date = dateTemp[2].split('T')[0]

                return(
                <Storie>
                    <Div onClick={() => goToUserStorie(item.id)}>
                        <StorieImgDiv>
                            <StorieImg src={images + item.image} alt="Imagem storie"/>
                        </StorieImgDiv>
                        <TextDiv>
                            <Profile>{firstName}</Profile>
                            <Account>{'@' + item.userName}</Account>
                        </TextDiv>
                    </Div>
                    <p>
                        <DateText>{date}</DateText>
                        <ImgDate>
                            <img src={DateIcon} alt="Line Icon"/>
                        </ImgDate>
                        <Month>{month}</Month>
                    </p>
                </Storie>
                )
            })}
                

            </StorieSection>

            <Nav/>
        </div>
    )
}

export default Stories;