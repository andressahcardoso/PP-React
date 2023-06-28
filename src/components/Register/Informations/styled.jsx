import styled from "styled-components";

export const Information = styled.section`
    display: grid;
    grid-template-rows: 37vh 51vh 12vh;
    grid-template-areas: 'text-description'
                         'textWelcome'
                         'next-previous-buttons';        
    background-color: white;
`

export const TextDescription = styled.div`
    grid-area: text-description;
    margin-top: -2vh;
    padding-left: 6vw;
    padding-right: 6vw;
        display: flex;
        flex-direction: column;
        justify-content: center; /* ALinhar no centro - HORIZONTAL */
        align-content: center; /* Alinhar no centro - VERTICAL */
        flex-wrap: wrap;  /* Alinhar no centro - VERTICAL */

    background-color: rgba(145, 159, 229, 1);
    border-radius: 0px 0px 50px 50px;
`

export const TextWelcome = styled.div`
    padding-top: 5vh;
    padding-left: 8vw;
    padding-right: 24vw;
`

export const NextPreviousButtons = styled.div`
    grid-area: next-previous-buttons;
    height: 10vh;
    padding-left: 8vw;
    padding-right: 8vw;
        display: flex;
        justify-content: space-between;
        align-content: center; /* Alinhar no centro - VERTICAL */
        flex-wrap: wrap;  /* Alinhar no centro - VERTICAL */
`

export const Title = styled.h1`
    display: block;
    text-align: center;
    font-weight: bold;
    font-size: 30px;
    color: #ffffffe5;
`

export const Subtitle = styled.h2`
    display: block;
    text-align: center;
    margin-top: -2vh;
    color: #ffffffe5;
`

export const Paragrafo = styled.p`
    text-align: center;
    color: #ffffffe5;
`

export const Paragrafo2 = styled.p`
    text-align: center;
    color: #ffffffe5;
`

export const TextTitle = styled.p`
    font-size: 24px;
`

export const Text = styled.p`
    text-align: justify;
`

export const PreviousButton = styled.img`
    width: 6vh;
    height: 6vh;
`

export const Buttons = styled.button`
    text-align: center;

    align-items: center;
    color: white;
    font-size: 18px;
    font-weight: 500;

    height: 6vh;
    
    padding-left: 8vw;
    padding-right: 8vw;

    background-color: rgba(145, 159, 229, 1);
    border: solid 1px rgba(145, 159, 229, 1);
    border-radius: 30px;
`