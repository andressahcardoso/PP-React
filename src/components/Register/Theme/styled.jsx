import styled from "styled-components";

export const Themes = styled.section`
    display: grid;
    grid-template-rows: 15vh 53vh 20vh 12vh;
    grid-template-areas: 'header'
                         'sun'
                         'buttons'
                         'next-previous-buttons';        
    background-color: white;
`

export const Header = styled.div`
    grid-area: header;
    margin-top: 3vh;
    padding-left: 6vw;
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

export const SunTheme = styled.div`
    grid-area: sun;
    display: flex;
        flex-direction: column;
        justify-content: center; /* Alinhar no centro - HORIZONTAL */
        align-content: center; /* Alinhar no centro - VERTICAL */
        flex-wrap: wrap;  /* Alinhar no centro - VERTICAL */
        text-align: center;

`

export const ImgContainer =styled.div`
     display: flex;
        justify-content: center; /* Alinhar no centro - HORIZONTAL */
        align-content: center; 
`

export const ImgSun = styled.img`
    width: 25vw;
`

export const ButtonTheme = styled.div`
    grid-area: buttons;
`

export const Title = styled.h3`
    font-size: 24px;
`

export const Subtitle = styled.p`
    font-size: 20px;
`

export const ParagrafoImg = styled.p`
    font-size: 18px;
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
