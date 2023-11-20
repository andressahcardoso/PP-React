import styled from "styled-components";

export const SearchComponent = styled.section`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-content: start;
    flex-wrap: wrap;
    padding-bottom: 20vh;
`


// Start | Input area

export const DivInput = styled.div`
    display: flex;
    margin-top: 2vh;
`

export const Input = styled.input`
    width: 85vw;
    height: 5vh;
    border-radius: 40px;
    border: 0px;
    border: 1px solid #c7c8c8;
    box-shadow: 5px 2px 2px #c7c8c8;
    padding-left: 4vw;

    &:focus{
        outline: none;
    }
`

export const ImgSearch = styled.img`
    margin-left: -12vw;
`


// Start | Users 

export const Div = styled.div`
    margin-top: 4vh;
    padding-left: 2vw;
`

export const UserDiv = styled.div`
    height: 8vh;
    border-bottom: 1px solid #bbb9b9;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
`

export const DivUser = styled.div`
    display: flex;
    flex-direction: row;
`

export const Img = styled.img`
    width: 10vw;
    margin-right: 3vw;
`

export const PersonName = styled.p`
    font-weight: 600;
`

export const PersonProfile = styled.p`
    margin-top: -1.5vh;
`

export const Btn = styled.div`
    height: 2vh;
    padding: 1vw 8vw 2vw 8vw;
    color: white;
    background-color: #919FE5;
    border: 0px;
    border-radius: 10px;
`
