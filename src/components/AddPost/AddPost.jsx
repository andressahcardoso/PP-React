import styled from "styled-components";

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


// Start | Image selection

export const PostDiv = styled.div`
    margin-top: 4vh;
    width: 100vw;
    padding: 4vw;
    border-top: solid 2px rgb(173, 185, 243);
    border-bottom: solid 2px rgb(173, 185, 243);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    cursor: pointer;
`

export const InputImg = styled.input`
    display: none;
`

export const PostImg = styled.img`
    width: 90vw;
    object-Fit: cover;
`

export const Text = styled.p`
    font-weight: 500;
    font-size: 18px;
    margin-left: 2vw;
    margin-top: 3.5vh;
`


// Start | Post information

export const Input = styled.input`
    width: 85vw;
    height: 5vh;
    border-radius: 30px;
    margin-top: -1vh;
    border: 0px;
    border: 1px solid rgb(173, 185, 243);
    box-shadow: 3px 1px 1px #919fe57c;
    padding-left: 4vw;

    &:focus{
        outline: none;
    }
`

export const SelectContainer = styled.div`
   width: 81vw;
    height: 4vh;
    border-radius: 30px;
    margin-top: -1vh;
    border: 0px;
    border: 1px solid rgb(173, 185, 243);
    box-shadow: 3px 1px 1px #919fe57c;
    padding-left: 4vw;
    padding-right: 4vw;
    padding-top: 2vh;

`


// Start | Publish button

export const DivConclued = styled.div`
    width: 82vw;
    display: flex;
    flex-direction: row;
    justify-content: end;
`

export const Conclued = styled.button`
    z-index: 1;
    position: relative;
    color: white;
    font-size: 18px;
    
    margin-right: -18%;
    margin-top: 3vh;
    padding: 3.5%;
    padding-left: 14vw;
    padding-right: 14vw;

    background-color: rgba(145, 159, 229, 1);
    border: solid 1px rgba(145, 159, 229, 1);
    border-radius: 30px;  
`

export const ImgConclued =styled.img`
    z-index: 2;
    margin-top: 3.5vh;
    margin-left: 2vw;
`


// Start | Final div

export const FinalDiv = styled.div`
    height: 10vh;
`
