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
    margin-top: 3vh;
    padding-left: 0vw;
    padding-right: 0vw;
    width: 95vw;
        display: flex;
        justify-content: center; /* Alinhar no centro - HORIZONTAL */
        align-content: center; /* Alinhar no centro - VERTICAL */
        flex-wrap: wrap;  /* Alinhar no centro - VERTICAL */
`



// Start | theme area

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
    justify-content: center;
    align-content: center; 
`

export const ImgSun = styled.img`
    width: 25vw;
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


// Start | Button theme

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
