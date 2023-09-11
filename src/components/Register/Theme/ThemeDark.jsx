import styled from "styled-components";

export const Themes = styled.section`
    display: grid;
    grid-template-rows: 15vh 46vh 27vh 12vh;
    grid-template-areas: 'header'
                         'sun'
                         'buttons'
                         'next-previous-buttons';        
    background-color: #000000;
    color: white;
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
    margin-left: 18vw;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`