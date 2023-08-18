import styled from "styled-components";

export const Form = styled.section`
    display: grid;
    grid-template-rows: 15vh 19vh 53vh 12vh;
    grid-template-areas: 'header'
                         'textArea'
                         'semana24h'
                         'next-previous-buttons';        
    background-color: white;
`

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

export const Line = styled.div`
    width: 65vw;
    margin-top: 3vh;
    border-bottom: solid 3px rgba(145, 159, 229, 1);  
        display: flex;
        justify-content: center; /* Alinhar no centro - HORIZONTAL */
`

export const Div = styled.div`
    margin-right: 10vw;
    margin-top: -3vh;
`

export const CircleStep = styled.div`
    display: flex;
    justify-content: center; /* Alinhar no centro - HORIZONTAL */
`

export const StepConclued = styled.div`

    position: relative;
    overflow: hidden;
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
`

export const StepConcluedBack = styled.div`
    position: relative;
    overflow: hidden;
    height: 3vh;
    width: 3vh;
    padding: 1vh;
    margin-top: 0vh;
    text-align: center;
    color: rgba(145, 159, 229, 1);

    border: solid 3px rgba(145, 159, 229, 1);
    background-color: rgba(145, 159, 229, 1);
    border-radius: 50%;
    color: white;
`

export const AnimatedBackground = styled.div`
    z-index: 7;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(145, 159, 229, 1);
    transform: translateX(-100%);
    animation: fillBackground 1s forwards;
    
  
  @keyframes fillBackground {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0);
    }
  }
`

export const P = styled.p`
    z-index: 10;
    color: white;
    position: relative; 
    margin-top: 0vh;
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
    margin-left: 2vw;
    margin-right: 10vw;
`

export const Component24h = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: center; /* Alinhar no centro - VERTICAL */
    flex-wrap: wrap;  /* Alinhar no centro - VERTICAL */
`

export const ButtonIncrement = styled.div`
    display: flex;
    flex-direction: column;
`

export const TimeComponent = styled.section`
    grid-area: semana24h;
    margin-left: 8vw;
    margin-right: 8vw;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-bottom: 8vh;
`

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

export const Time = styled.p`
    background-color: rgba(113, 130, 215, 1);
    color: white;
    border-radius: 20px;
    padding: 1vh;
    width: 15vw;
    text-align: center;
` 

export const Week = styled.p`
    background-color: rgba(113, 130, 215, 1);
    color: white;
    border-radius: 20px;
    padding: 1vh;
    width: 22vw;
    text-align: center;
` 

export const Input = styled.input`
    border: 0px;
    border-bottom: 1px solid rgba(128, 128, 128, 0.621);
    width: 65vw;
    font-size: 1.5em;
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
