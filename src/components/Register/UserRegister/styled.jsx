import styled from "styled-components";

export const Users = styled.section`
    display: grid;
    grid-template-rows: 15vh 56vh 17vh 12vh;
    grid-template-areas: 'header'
                         'form_itens'
                         'enterWith'
                         'next-previous-buttons';        
    background-color: white;
`

export const Header = styled.div`
    grid-area: header;
    margin-top: 3vh;
    padding-left: 0vw;
    padding-right: 18vw;
    width: 100%;
        display: flex;
        justify-content: center; /* Alinhar no centro - HORIZONTAL */
        align-content: center; /* Alinhar no centro - VERTICAL */
        flex-wrap: wrap;  /* Alinhar no centro - VERTICAL */
`

export const Line = styled.div`
    width: 65vw;
    margin-top: 3vh;
    border-bottom: solid 3px rgba(145, 159, 229, 1);  
        display: flex;
        justify-content: center; /* Alinhar no centro - HORIZONTAL */
`

export const Div = styled.div`
    margin-right: 12vw;
    margin-top: -3vh;
`

export const CircleStep = styled.div`
    display: flex;
    justify-content: center; /* Alinhar no centro - HORIZONTAL */
`

export const StepConclued = styled.div`
    height: 3vh;
    width: 3vh;
    padding: 1vh;
    margin-top: 0vh;
    text-align: center;
    color: rgba(145, 159, 229, 1);

    border: solid 3px rgba(145, 159, 229, 1);
    background-color: white;
    border-radius: 50%;
    color: white;
    background-color: rgba(145, 159, 229, 1);
`


export const Step = styled.div`
    height: 3vh;
    width: 3vh;
    padding: 1vh;
    margin-top: -3vh;
    text-align: center;
    color: rgba(145, 159, 229, 1);

    border: solid 3px rgba(145, 159, 229, 1);
    background-color: white;
    border-radius: 50%;
`

export const InformationStep = styled.p`
    text-align: center;
`

export const StepMargin = styled.div`
    margin-right: 12vw;
`

export const FormItens = styled.section`
    grid-area: form_itens;
        display: flex;
        justify-content: center; /* Alinhar no centro - HORIZONTAL */
        align-content: center; /* Alinhar no centro - VERTICAL */
        flex-wrap: wrap;  /* Alinhar no centro - VERTICAL */
`

export const SelectContainer = styled.div`
    margin-left: 4vw;
    height: 6vh;
    width: 85vw;
    margin-left: 2vw;
    margin-top: 1vh;
    padding: 10px 20px 12px 10px;
    border: 1px solid rgba(145, 159, 229, 1);
    border-radius: 10px;
        box-sizing: border-box;
`

export const Option = styled.label`
    padding: 0px 2px 1px;
    margin-left: 2vw;
`

export const Label = styled.label`
    margin-left: 4vw;
    display: block;  /* Manter o label sobre o input */
    margin-top: 2vh;
    color: #666161;
    font-weight: 500;
    font-size: 16px;
`

export const Input = styled.input`
    width: 76vw;
    height: 2vh;
    margin-left: 2vw;
    margin-top: 1vh;
    padding: 2vh;

    background-color: rgb(223, 228, 254);
    border: solid 1px rgb(223, 228, 254);
    border-radius: 10px;
`

export const EnterWith = styled.section`
    grid-area: enterWith;

`

export const TextLine = styled.div`
    height: 6vh;
    width: 80vw;
    text-align: center;
    margin-top: -5vh;
    margin-left: 10vw;
    border-bottom: solid 3px rgba(145, 159, 229, 1);
`

export const EnterText = styled.p`
    width: 30vw;
    text-align: center;
    margin-left: 25vw;
    padding-top: 5vh;
    background-color: white;
`

export const ButtonsContainer = styled.div`
    margin-top: 2vh;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`

export const GoogleIcon = styled.img`
    z-index: 10;
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
    z-index: 9;
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


export const NextPreviousButtons = styled.div`
    grid-area: next-previous-buttons;
    padding-left: 8vw;
    padding-right: 8vw;
        display: flex;
        justify-content: space-between;
        align-content: center; /* Alinhar no centro - VERTICAL */
        flex-wrap: wrap;  /* Alinhar no centro - VERTICAL */ 
`

export const Button = styled.button`
    align-items: center;
    color: rgba(145, 159, 229, 1);
    font-size: 19px;
    font-weight: 500;

    height: 6vh;

    background-color: white;
    border: solid 0px ;
`

export const NextButton = styled.img`
    width: 6vh;
    height: 6vh;
`
