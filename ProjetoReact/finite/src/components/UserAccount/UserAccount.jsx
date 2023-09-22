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
    background-color: white;
    z-index: 5;
    position: sticky;
`

export const UserInformations = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`

export const TextDiv =styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 4vw;
    padding-right: 4vw;
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
    background-color: white;
    border-radius: 100px;
    height: 14vh;
    width: 30vw;
    padding: 2vw;
    margin-top: -7vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const UserImg = styled.img`
    height: 14vh;
    width: 30vw;
    border-radius: 200px;
`


// Start | User description

export const UserText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 70vw;
    margin-left: 14vw;
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
    background-color: #919FE5;
    border: 0px;
    padding: 2vw 8vw;
    border-radius: 15px;
    margin-right: 2vw;
    font-size: 18px;
    color: white;
`

export const ReportBtn = styled.button`
    background-color: white;
    border: 1px solid #919FE5;
    padding: 2vw 8vw;
    border-radius: 15px;
    font-size: 18px;
    color: #919FE5;
`


// Start | Options

export const OptionDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 2vh;
    width: 95vw;
`

export const P = styled.p`
    margin-left: 8vw;
    font-size: 16px;
`


// Start | Post section

export const PostSection = styled.section`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    width: 100vw;
`

export const DivImage = styled.div`
    padding: 2vw;
`

export const PostImage = styled.img`
    height: 45vw;
    width: 40vw;
`