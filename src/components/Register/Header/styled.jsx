import styled from "styled-components"

export const HeaderContainer = styled.section`
    height: 15vh;
    display: flex;
        justify-content: center;
        align-items: center; /* Alinhar no centro - VERTICAL */
        
`

export const StepsContainer = styled.div`
    height: 15vh;
    width: 85vw;
    padding-top: 4vh;
    padding-left: 5vw;
    gap: 3vw;
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: end;
`


export const Line = styled.div`
    width: 65vw;
    border-bottom: solid 3px rgba(145, 159, 229, 1);  
        display: flex;
        justify-content: center; /* Alinhar no centro - HORIZONTAL */
        position: absolute;
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