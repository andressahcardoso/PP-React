import styled from "styled-components";

export const Header = styled.header`
    height: 10vh;
    padding-right: 8vw;
    border-bottom: solid 1px rgb(201, 201, 201);
        display: flex;
        justify-content: space-between;
        align-content: center; /* Alinhar no centro - VERTICAL */
`

export const PreviousButton = styled.img`
    width: 2.5em;
    height: 2.5em;
    margin-top: 2.5vh;
`

export const ImagemLogo =styled.img`
    height: 13vh;
    margin-top: -1.5vh;
`

export const WelcomeBack = styled.h3`
    height: 5vh;
    padding-top: 0.1vh;
    padding-left: 6vw; 
    font-size: 20px;
`

export const Subtitle = styled.h3`
    margin-top: -2vh;
`

export const FormItens = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
    height: 46vh;
    padding-top: 3vh;
        display: flex;
        justify-content: center; /* Alinhar no centro - HORIZONTAL */
        align-content: center; /* Alinhar no centro - VERTICAL */
        flex-wrap: wrap;  /* Alinhar no centro - VERTICAL */
`

export const Form = styled.form`
    display: block;
`

export const Label = styled.label`
    display: block; /* Manter o label sobre o input */
    margin-top: 2vh;
    color: #666161;
    font-weight: 500;
    font-size: 18px;
`

export const Input = styled.input`
    width: 80vw;
    height: 2vh;
    margin-top: 1vh;
    padding: 2vh;
    border-radius: 10px;
    border: solid 1px rgb(223, 228, 254);
    background-color: rgb(223, 228, 254);
`

export const ForgotPassword = styled.p`
    text-align: right;
    margin-top: 2vh;
    font-weight: 500;
`

export const LoginButton  = styled.button`
    width: 89vw;
    height: 8vh;
    margin-top: 3vh;
    border-radius: 10px;
    border: solid 1px rgba(145, 159, 229, 1);
    background-color: rgba(145, 159, 229, 1);
    cursor: pointer;
    color: white;
    font-size: 20px;
    font-weight: 700;
`

export const EnterWith = styled.section`
    height: 24vh;
`

export const TextLine = styled.div`
    height: 6vh;
    width: 80vw;
    text-align: center;
    margin-left: 10vw;
    padding-top: 2vh;
    border-bottom: solid 3px rgba(145, 159, 229, 1);
`

export const EnterText = styled.p`
    width: 30vw;
    text-align: center;
    margin-left: 25vw;
    padding-top: 3vh;
    background-color: white;
`

export const ButtonsContainer = styled.div`
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding-top: 6vh;
`

export const GoogleIcon = styled.img`
    z-index: 1;
    position: relative;
    color: white;
    font-size: 18px;

    height: 2.8vh;
    margin-top: -.7.2vh;
    margin-right: -35.5%;
    padding: 3.5%;
    padding-left: 4vw;
    padding-right: 4vw;
    
    background-color: white;
    border: solid 1px rgba(145, 159, 229, 1);
    border-radius: 30px;    
`

export const GoogleText = styled.p`
    z-index: -1;
    align-items: center;
    color: black;
    font-size: 18px;

    height: 3vh;
    width: 20vw;
    padding: 3.2%;
    padding-left: 23vw;
    padding-right: 15vw;

    background-color: white;
    border: solid 1px rgba(145, 159, 229, 1);
    border-radius: 30px;
`

export const GoogleDiv = styled.div`
    width: 80vw;
`

export const buttonG = styled.div`
    width: 80vw;
`