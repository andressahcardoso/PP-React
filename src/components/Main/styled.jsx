import styled from "styled-components";

export const MainContainer = styled.section`
    display: grid;
    grid-template-rows: 50vh 35vh 15vh;
    grid-template-areas: 'main-image'
                         'text-description'
                         'button-login-register'
                         ;        
    background-color: white;
`

export const MainImage = styled.div`
    grid-area: main-image;
    background-color: rgba(145, 159, 229, 1);
    border-radius: 0px 0px 50px 50px;
        display: flex;
        justify-content: center;
        align-items: center;
`

export const TextDescription = styled.div`
    grid-area: text-description;
    padding-left: 6vw;
    padding-right: 6vw;
        display: flex;
        flex-direction: column;
        justify-content: center; /* ALinhar no centro - HORIZONTAL */
        align-content: center; /* Alinhar no centro - VERTICAL */
        flex-wrap: wrap;  /* Alinhar no centro - VERTICAL */
`

export const ButtonLoginRegister = styled.div`
     grid-area: button-login-register;
        display: inline-block;
        text-align: center;
        margin-top: 2%;
`

export const PhoneImg = styled.img`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const MainTitle = styled.h1`
    position: absolute;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 50px;
    text-align: center;
    color: rgba(255, 255, 255, 0.575);   
`

export const Title = styled.h1`
    display: block;
    text-align: center;
    font-weight: bold;
    font-size: 35px;
`

export const Subtitle = styled.h1`
    display: block;
    text-align: center;
    margin-top: -2vh;
`

export const Paragrafo = styled.p`
    text-align: center;
`

export const Login = styled.button`
    z-index: 1;
    position: relative;
    color: white;
    font-size: 18px;
    
    margin-right: -18%;
    padding: 3.5%;
    padding-left: 10vw;
    padding-right: 10vw;

    background-color: rgba(145, 159, 229, 1);
    border: solid 1px rgba(145, 159, 229, 1);
    border-radius: 30px;  
`

export const Register = styled.button`
    z-index: -1;
    color: white;
    font-size: 18px;

    padding: 3.5%;
    padding-left: 25vw;
    padding-right: 10vw;

    background-color: rgb(173, 185, 243);
    border: solid 1px rgb(173, 185, 243);
    border-radius: 30px;
`