import styled from "styled-components";

export const HeaderComponent = styled.section`
    width: 92vw;
    padding: 4vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
`


// Start | User settings

export const Settings = styled.div`
    height: 80vh;
`

export const User = styled.div`
    width: 40vw;
    margin-left: 20vw;
    margin-bottom: 6vh;
    padding: 8vw;
    padding-bottom: 0vw;
    border-bottom: 1px solid #d0cdcd;
    display: flex;
    flex-direction: row;
`

export const ImgDiv = styled.div`
    width: 22vw;
    height: 10vh;
    margin-left: -20vw;
    padding: 1vw;
    background-color: #919fe5b1;
    border-radius: 100px;
`

export const Img = styled.img`
    width: 100%;
    height: 10vh;
    object-fit: cover;
    border-radius: 50px;
`

export const TextDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: end;
`

export const Icon = styled.img`
    height: 2vh;
    margin-left: 4vw;
    margin-bottom: 1vh;
`

export const Text = styled.p`
    margin-left: 4vw;
    margin-bottom: 1vh;
`


// Start | Settings option

export const Div = styled.div`
    padding: 0vh;
    padding-bottom: 1vh;
    padding-left: 6vw;
    padding-right: 6vw;
    border-bottom: 1px solid #d0cdcd;
`

export const Title = styled.p`
    margin-left: 4vw;
    margin-bottom: -1vh;
    font-weight: 600;
`

export const Title2 = styled.input`
    margin-left: 4vw;
    margin-bottom: 1vh;
    font-weight: 600;
    display: none;
`

export const Information = styled.div`
    display: flex;
    flex-direction: row;
`

export const Pfoto = styled.div`
    margin-top: 0vh;
    margin-bottom: 1vh;
    margin-left: 2vw;
`

export const Icon2 = styled.img`
    height: 2vh;
    margin-left: 4vw;
    margin-top: 1.5vh;
`

export const Icon3 = styled.img`
    height: 2vh;
    margin-left: 4vw;
    margin-top: 4vh;
    margin-bottom: 1vh;
    margin-right: 3vw;
`

export const InputText = styled.input`
    margin-top: 2vh;
    width: 90vw;
    margin-bottom: 1vh;
    border: none;
    margin-left: 4vw;
    outline: none;
    font-size: 16px;
`

export const BtnDiv = styled.div`
    height: 5vh;
    margin-top: 25vh;
    display: flex;
    justify-content: end;
    align-content: space-between;
    
`

export const Cancel = styled.button`
     background-color: #919fe5b1;
     border: 0px;
     border-radius: 8px;
     padding-left: 4vw;
     padding-right: 4vw;
     color: white;
     margin-right: 4vw;
`

export const Save = styled.button`
     background-color: #919FE5;
     border: 0px;
     border-radius: 8px;
     padding-left: 4vw;
     padding-right: 4vw;
     color: white;
     margin-right: 6vw;
`