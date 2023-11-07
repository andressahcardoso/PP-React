import styled from "styled-components";

export const PostContainer = styled.div`
    width: 94vw;
    height: 45vh;
    margin-bottom: 2vh;
    z-index: 2;
    border: 2px solid #919FE5;
    border-radius: 10px;
    display: flex;
    flex-wrap: wrap;
`


// Start | Profile informations

export const Profile = styled.div`
    width: 45vw;
    height: 6vh;
    margin-top: 1vh;
    margin-left: 2vw;
    padding-left: 2vw;
    z-index: 5;
    background-color:#5f5a5a46;
    border-radius: 20px;
    display: flex;
    flex-direction: row;
`

export const ImgProfile = styled.img`
    width: 10vw;
    margin-right: 4vw;
`

export const PersonName = styled.p`
    color: white;
    font-weight: 600;
    margin-top: 0.6vh;
`

export const PersonProfile = styled.p`
    color: white;
    margin-top: -1.5vh;
`

export const Img = styled.img`
    width: 100%;
    height: 100%;
    margin-top: -7vh;
    z-index: 2;
    border-radius: 20px;
`


// Start | Interaction area

export const Interaction = styled.div`
    width: 100%;
    height: 6vh;
    margin-top: -6.5vh;
    margin-right: 1vw;
    margin-left: 1vw;
    padding-right: 3vw;
    padding-left: 5vw;
    z-index: 8;
    background-color: #5f5a5ac8;
    border-radius: 0px 0px 10px 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const DivBtn = styled.div`
    display: flex;
    flex-direction: row;
`

export const ImgIcon = styled.img`
    width: 5vw;
    margin-right: 2vw;
    margin-top: 0vh;
`

export const Text = styled.p`
    color: white;
    font-weight: 600;
    margin-right: 2vw;
`

export const ImgIconRight = styled.img`
    width: 5vw;
    margin-right: 2vw;
    margin-top: 0vh;
`
