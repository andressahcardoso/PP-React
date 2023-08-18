import styled from "styled-components";

export const Form = styled.section`
    display: grid;
    grid-template-rows: 15vh 19vh 54vh 12vh;
    grid-template-areas: 'header'
                         'textArea'
                         'semana24h'
                         'next-previous-buttons';        
    background-color: white;
`


// Start | Header

export const Header = styled.div`
    grid-area: header;
    margin-top: 3vh;
    padding-left: 0vw;
    padding-right: 0vw;
    width: 95vw;
        display: flex;
        justify-content: center; /* Alinhar no centro - HORIZONTAL */
        align-content: center; /* Alinhar no centro - VERTICAL */
        flex-wrap: wrap;  /* Alinhar no centro - VERTICAL */
`


// Start | Question text

export const Text = styled.div`
    grid-area: textArea;
    padding-left: 8vw;
    padding-right: 6vw;
    border-top: solid 0.5px rgba(128, 128, 128, 0.621);
    border-bottom: solid 0.5px rgba(128, 128, 128, 0.621);
    margin-top: 4vh;
`

export const Question = styled.h3`
    color: rgba(113, 130, 215, 1);
`


// Start | Time component

export const TimeComponent = styled.section`
    grid-area: semana24h;
    margin-left: 8vw;
    margin-right: 8vw;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-bottom: 8vh;
`

export const Time = styled.p`
    background-color: rgba(113, 130, 215, 1);
    color: white;
    border-radius: 20px;
    padding: 1vh;
    width: 15vw;
    text-align: center;
` 

export const Component24h = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: center; /* Alinhar no centro - VERTICAL */
    flex-wrap: wrap;  /* Alinhar no centro - VERTICAL */
`

export const Input = styled.input`
    border: 0px;
    border-bottom: 1px solid rgba(128, 128, 128, 0.621);
    width: 65vw;
    font-size: 1.5em;
`

export const ButtonIncrement = styled.div`
    display: flex;
    flex-direction: column;
`

export const ButtonNum = styled.button`
    background-color: white;
    border: 1px solid rgba(128, 128, 128, 0.621);
    box-shadow: 2px 2px 2px  rgba(128, 128, 128, 0.621);
    border-radius: 5px;
    margin-top: 1vh;
    width: 3vh;
    height: 3vh;
`

export const Week = styled.p`
    background-color: rgba(113, 130, 215, 1);
    color: white;
    border-radius: 20px;
    padding: 1vh;
    width: 22vw;
    text-align: center;
` 


// Start | Next and previous buttons

export const NextPreviousButtons = styled.div`
    grid-area: next-previous-buttons;
    padding-left: 8vw;
    padding-right: 8vw;
        display: flex;
        justify-content: space-between;
        align-content: center; /* Alinhar no centro - VERTICAL */
        flex-wrap: wrap;  /* Alinhar no centro - VERTICAL */ 
`

