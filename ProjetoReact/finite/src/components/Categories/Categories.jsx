import styled from "styled-components";

export const SearchComponent = styled.section`
    height: 80.5vh;
    display: flex;
    justify-content: center;
    align-content: start;
    flex-wrap: wrap;
`


// Start | Input area

export const DivInput = styled.div`
    display: flex;
    margin-top: 2vh;
    margin-bottom: 4vh;
    margin-left: 1vw;
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


// Start | Config options

export const ConfigDiv = styled.div`
    height: 6vh;
    margin-top: 2vh;
    border-bottom: 2px solid #5f5a5a1f;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
`

export const ConfigOption = styled.div`
    display: flex;
    flex-direction: row;
    padding-left: 8vw;
`

export const Img = styled.img`
    height: 3vh;
    margin-right: 3vw;
`

export const Text = styled.p`
    font-size: 18px;
    font-weight: 500;
    margin-top: 0.9vw;
`

export const ImgDiv = styled.div`
    width: 10vw;
    display: flex;
    margin-left: -2vw;
    justify-content: center;
`
