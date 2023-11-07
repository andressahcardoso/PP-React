import styled from "styled-components";

export const Div = styled.div`
    width: 100vw;
    height: 44vh;
    margin-top: -8vh;
    z-index:2;
`

export const Img = styled.img`
    width: 100vw;
    z-index:2;
`


// Start | Comment div

export const CommentDiv = styled.div`
    height: 72h;
    width: 100vw;
    margin-top: -8vh;
    background-color: white;
    z-index: 20;
    position: absolute;
    border-radius: 40px 40px 0px 0px;
`


// Start | User informations

export const Profile = styled.div`
    width: 89.2vw;
    height: 6vh;
    padding: 2vh;
    padding-left: 6vw;
    z-index: 5;
    display: flex;
    flex-direction: row;

    border-bottom: 2px solid #5f5a5a46;
    display: flex;
    justify-content: space-between;
`

export const ProfileDiv = styled.div`
    display: flex;
    flex-direction: row;
`

export const ImgProfile = styled.img`
    width: 10vw;
    margin-right: 4vw;
`

export const PersonName = styled.p`
    font-weight: 600;
    margin-top: 0.6vh;
`

export const PersonProfile = styled.p`
    margin-top: -1.5vh;
`

export const ImgIcon = styled.img`
    height: 4.5vh;
    margin-top: 1vh;
`


// Start | User comment

export const UserComment = styled.div`
    width: 91.7vw;
    padding: 1vh;
    padding-left: 6vw;
    border-bottom: 2px solid #5f5a5a46;
`


// Start | Community 

export const Community = styled.section`
    padding: 4vw;
`

export const CommentPost = styled.div`
    width: 60vw;
    padding: 1vw;
    padding-top: 1vh;
    padding-left: 4vw;
    padding-right: 4vw;
    margin-bottom: 2vh;
    background-color: #919fe558;
    border-radius: 40px 40px 40px 0px;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: start;
`

export const ImgUser = styled.img`
    width: 8vw;
    margin-right: 4vw;
    margin-top: 1vh;
`

export const CommentText = styled.p`
    color: grey;
    margin-top: -1.5vh;
`

export const CommentMainUser = styled.div`
    width: 60vw;
    margin-left: 25vw;
    margin-bottom: 2vh;
    padding: 1vw;
    padding-top: 1vh;
    padding-left: 4vw;
    padding-right: 4vw;
    background-color: #919fe558;
    border-radius: 40px 40px 0px 40px;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: start;
`


// Start | Add comment

export const AddComment = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`

export const DivImg = styled.div`
    height: 6vh;
    width: 20vw;
    background-color: #056F91;
    border-radius: 40px 0px 0px 40px;
`

export const ImgComment = styled.img`
    width: 12vw;
`

export const DivInput = styled.div`
    margin-left: -6vw;
`

export const Input = styled.input`
    width: 70vw;
    height: 6vh;
    border-radius: 40px;
    border: 0px;
    box-shadow: 5px 2px 2px #c7c8c8;
    padding-left: 4vw;

    &:focus{
        border: 0px;
        outline: none;
    }
`

export const ImgPublish = styled.img`
    width: 12vw;
    margin-left: -12vw;
`
