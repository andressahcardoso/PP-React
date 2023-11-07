import styled from "styled-components";

export const HeaderComponent = styled.section`
    width: 92vw;
    padding: 4vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
`

export const AddPostComponent = styled.section`
    height: 80.5vh;
    display: flex;
    justify-content: center;
    align-content: start;
    flex-wrap: wrap;
`

export const OptionButton = styled.div`
    grid-area: button-login-register;
    display: inline-block;
    text-align: center;
    margin-top: 2%;
`

export const Publication = styled.button`
    z-index: 1;
    position: relative;
    color: white;
    font-size: 18px;
    
    margin-right: -18%;
    padding: 3.5%;
    padding-left: 14vw;
    padding-right: 14vw;

    background-color: rgba(145, 159, 229, 1);
    border: solid 1px rgba(145, 159, 229, 1);
    border-radius: 30px;  
`

export const Stories = styled.button`
    z-index: -1;
    color: white;
    font-size: 18px;

    padding: 3.5%;
    padding-left: 30vw;
    padding-right: 14vw;

    background-color: rgba(173, 185, 243, 0.722);
    border: solid 1px rgb(173, 185, 243);
    border-radius: 30px;
`


// Start | Ranking users

export const TopSection = styled.section`
    margin-top: 3vh;
    display: flex;
    flex-direction: row;
    margin-bottom: 2vh;
`

export const UserDiv = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`

export const ImgDiv2 =styled.div`
    width: 15vw;
    padding: 1.5vw;
    background-color: rgb(181, 190, 236);
    border-radius: 50px;
    display: flex;
    justify-content: center;
`

export const ImgDiv3 =styled.div`
    width: 15vw;
    padding: 1.5vw;
    background-color: rgb(210, 217, 242);
    border-radius: 50px;
    display: flex;
    justify-content: center;
`

export const Img = styled.img`
    width: 15vw;
`

export const NumberDiv = styled.div`
    width: 7vw;
    margin-top: -2vh;
    padding: 1vw;
    z-index: 10;
    background-color: rgba(145, 159, 229, 1);
    border-radius: 50px;
    display: flex;
    justify-content: center;
    position: sticky;
`

export const NumberDiv2 = styled.div`
    width: 7vw;
    margin-top: -2vh;
    padding: 1vw;
    z-index: 10;
    background-color: rgb(181, 190, 236);
    border-radius: 50px;
    display: flex;
    justify-content: center;
    position: sticky;
`

export const NumberDiv3 = styled.div`
    width: 7vw;
    margin-top: -2vh;
    padding: 1vw;
    z-index: 10;
    background-color: rgb(210, 217, 242);
    border-radius: 50px;
    display: flex;
    justify-content: center;
    position: sticky;
`

export const NumberImg = styled.img`
`

export const Profile = styled.p`
    font-size: 20px;
    font-weight: 500;
`

export const Account = styled.p`
    font-size: 16px;
    margin-top: -1vh;
`

export const MainUser = styled.div`
    width: 40vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const MainImg = styled.div`
    width: 24vw;
    padding: 1.5vw;
    z-index: 2;
    background-color: rgba(145, 159, 229, 1);
    border-radius: 100px;
    display: flex;
    justify-content: center;
`

export const ImgMain = styled.img`
    width: 25vw;
    z-index: 2;
`


// Start | User List

export const ListSection = styled.section`
    width: 80vw;
    height: 3vh;
    margin-top: 1vh;
    padding: 4vw;
    background-color: rgb(242, 243, 249);
    border-radius: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const ListSection1 = styled.section`
    width: 80vw;
    height: 3vh;
    margin-top: 1vh;
    padding: 4vw;
    background-color: #919FE5;
    border-radius: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const ListSection2 = styled.section`
    width: 80vw;
    height: 3vh;
    margin-top: 1vh;
    padding: 4vw;
    background-color: rgb(181, 190, 236);
    border-radius: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const ListSection3 = styled.section`
    width: 80vw;
    height: 3vh;
    margin-top: 1vh;
    padding: 4vw;
    background-color: rgb(210, 217, 242);
    border-radius: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const Informations = styled.div`
    width: 50vw;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`

export const Users = styled.div`
    width: 40vw;
    height: 8vh;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`

export const ImgList = styled.img`
    height: 4.5vh;
`

export const Name = styled.p`
    font-size: 18px;
    font-weight: 500;
    margin-top: 2vh;
`

export const AccountUser = styled.p`
    margin-top: -2.5vh;
    font-size: 14px;
`

export const TimeDiv = styled.p`
    width: 25vw;
    padding-right: 2vw;
    display: flex;
    flex-direction: row;
    justify-content: end;
    align-items: center;
`

export const Num = styled.h2`
    margin-left: 1vw;
    margin-right: 1vw;
`