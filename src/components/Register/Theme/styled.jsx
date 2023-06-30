import styled from "styled-components";

export const Themes = styled.section`
    display: grid;
    grid-template-rows: 15vh 46vh 27vh 12vh;
    grid-template-areas: 'header'
                         'sun'
                         'buttons'
                         'next-previous-buttons';        
    background-color: white;
`

export const Header = styled.div`
    grid-area: header;
    padding-top: 3vh;
    padding-left: 5vw;
    padding-right: 0vw;
    width: 95vw;
        display: flex;
        justify-content: center; /* Alinhar no centro - HORIZONTAL */
        align-content: center; /* Alinhar no centro - VERTICAL */
        flex-wrap: wrap;  /* Alinhar no centro - VERTICAL */
`

export const Line = styled.div`
    width: 65vw;
    padding-top: 3vh;
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
    padding-left: 2vw;
    padding-right: 10vw;
`

export const SunTheme = styled.div`
    grid-area: sun;
    display: flex;
        flex-direction: column;
        justify-content: end; /* Alinhar no centro - HORIZONTAL */
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
    display: flex;
    padding-top: 5vh;
    align-content: start;
    justify-content: center;
    flex-wrap: wrap;
`


export const CheckBoxWrapper = styled.div`
    position: relative;
`

export const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 33vw;
  height: 8vh;
  border-radius: 50px;
  background: rgba(145, 159, 229, 0.65);
  cursor: none;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 12vw;
    height: 6vh;
    margin: 2vw;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`
export const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 28vw;
  height: 5vh;
  &:checked + ${CheckBoxLabel} {
    background: rgba(145, 159, 229, 1);
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 12vw;
      height: 6vh;
      margin-left: 18vw;
      transition: 0.2s;
    }
  }
`

export const Title = styled.h3`
    font-size: 24px;
`

export const Subtitle = styled.p`
    font-size: 20px;
    margin-top: 0.5vh;
`

export const ParagrafoImg = styled.p`
    font-size: 18px;
    margin-top: -1vh;
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

