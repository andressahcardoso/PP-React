import styled from "styled-components";

export const Color = styled.div`
    height: 20vh;
    z-index: 1;
    background-color: #919FE5;
`


// Start | User section

export const UserSection = styled.section`
    height: 77vh;
    border-radius: 50px;
    margin-top: -5vh;
    z-index: 5;
    background-color: white;
    position: sticky;
`

export const UserInformations = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`

export const TextDiv =styled.div`
    padding-left: 4vw;
    padding-right: 4vw;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Num = styled.p`
    font-size: 20px;
    font-weight: 600;
`

export const Text = styled.p`
    font-size: 18px;
    margin-top: -1.5vh;
`

export const ImgDiv = styled.div`
    height: 14vh;
    width: 30vw;
    margin-top: -7vh;
    padding: 2vw;
    background-color: white;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const UserImg = styled.input`
    height: 14vh;
    width: 30vw;
    border-radius: 200px;
    display: none;
`

export const PostImg = styled.img`
    height: 14vh;
    width: 30vw;
    border-radius: 60px;
    object-Fit: cover;
`


// Start | User description

export const UserText = styled.div`
    width: 70vw;
    margin-left: 14vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Account = styled.p`
    font-size: 20px;
    font-weight: 600;
    margin-top: 1vh;
`

export const Description = styled.p`
    text-align: center;
    color: grey;
    margin-top: -0.2vh;
    font-size: 15px;
`


// Start | Buttons

export const BtnDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1vh;
`

export const EditBtn = styled.button`
    font-size: 18px;
    color: white;
    margin-right: 2vw;
    padding: 2vw 8vw;
    background-color: #919FE5;
    border: 0px;
    border-radius: 15px;
`

export const ReportBtn = styled.button`
    font-size: 18px;
    color: #919FE5;
    padding: 2vw 8vw;
    background-color: white;
    border: 1px solid #919FE5;
    border-radius: 15px;
`


// Start | Options

export const OptionDiv = styled.div`
    width: 95vw;
    margin-top: 2vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
`

export const P = styled.p`
    margin-left: 8vw;
    font-size: 16px;
`


// Start | Post section

export const PostSection = styled.section`
    width: 100vw;
    height: 42vh;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    overflow: auto;
`

export const DivImage = styled.div`
    padding: 2vw;
    width: 40vw; 
    height: 40vw; 
    overflow: hidden;
`

export const PostImage = styled.img`
    width: 100%; 
    height: 100%; 
    object-fit: cover; /* Corta a imagem para preencher a caixa mantendo a proporção original */
    object-position: center;
`