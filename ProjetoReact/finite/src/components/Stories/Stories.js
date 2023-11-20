import { StorieSection, Storie, Div, StorieImgDiv, StorieImg, TextDiv, Profile, Account, ImgDate, DateText, Month } from "./Stories.jsx";

// React
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

// Components
import MainHeader from "../MainHeader/MainHeader";
import Nav from "../Nav/Nav";

// Icons
import DateIcon from '../../assets/Icons/line.svg'

// Api
import { api } from "../../services/api";

// Theme
import { useTheme } from "../../hooks/useTheme";


function Stories() {
    const navigate = useNavigate();
    
    // Navigate functions
    function goToUserStorie(id) {
        navigate(`/User/Storie/${id}`);
    }
    
    
    // Hooks
    const [data, setData] = useState([]);

    const images = 'http://localhost:3001/uploads/';


    // Theme definition
    const {theme} = useTheme();


    // UseEffect Onload
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