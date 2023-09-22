import styled from "styled-components";

export const PostContainer = styled.div`
    border: 2px solid #919FE5;
    border-radius: 10px;
    width: 94vw;
    height: 45vh;
    margin-bottom: 2vh;
    z-index: 2;
    display: flex;
    flex-wrap: wrap;
`


// Start | Profile informations

export const Profile = styled.div`
    z-index: 5;
    background-color: #5f5a5a46;
    display: flex;
    flex-direction: row;
    border-radius: 20px;
    width: 45vw;
    height: 6vh;
    margin-top: 1vh;
    margin-left: 2vw;
    padding-left: 2vw;
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
    border-radius: 20px;
    width: 100%;
    height: 100%;
    margin-top: -7vh;
    z-index: 2;
`


// Start | Interaction area

export const Interaction = styled.div`
    margin-top: -6.5vh;
    padding-right: 3vw;
    padding-left: 5vw;
    width: 100%;
    height: 6vh;
    margin-left: 1vw;
    margin-right: 1vw;
    z-index: 8;
    border-radius: 0px 0px 10px 10px;
    background-color: #5f5a5ac8;
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
