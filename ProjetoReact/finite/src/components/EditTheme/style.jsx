import styled from "styled-components";

export const HeaderComponent = styled.section`
    width: 92vw;
    padding: 4vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
`

export const DivBtn = styled.div`
    display: flex;
    justify-content: end;
`

export const Btn = styled.button`
    color: white;
    font-size: 18px;
    height: 6vh;
    padding: 3.5%;
    padding-left: 10vw;
    padding-right: 10vw;
    margin-right: 2vw;

    background-color: rgba(145, 159, 229, 1);
    border: solid 1px rgba(145, 159, 229, 1);
    border-radius: 30px;  
    margin-top: 6vh;
`


export const Themes = styled.section`
    display: grid;
    grid-template-rows: 15vh 40vh 27vh 18vh;
    grid-template-areas: 'header'
                         'sun'
                         'buttons'
                         'next-previous-buttons';        
    background-color: white;
`