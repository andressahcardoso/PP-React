import styled, { css } from "styled-components"



export const HeaderContainer = styled.section`
    height: 15vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Line = styled.div`
    width: 65vw;
    margin-top: -2vh;
    border-bottom: solid 3px rgba(145, 159, 229, 1);  
        display: flex;
        justify-content: center;
        position: absolute;
`

export const StepsContainer = styled.div`
    height: 15vh;
    width: 85vw;
    padding-left: 5vw;
    gap: 2.3vw;
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: end;
`

export const Div = styled.div`
    margin-right: 10vw;
    margin-top: -10vh;
`

export const CircleStep = styled.div`
    display: flex;
    justify-content: center;
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
    color: rgba(145, 159, 229, 1);
`
export const Background = styled.div`
    ${props =>
    props.AnimatedBackground &&
    css`
       z-index: 7;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(145, 159, 229, 1);
        transform: translateX(-100%);
        animation: fillBackground 1s forwards;
        color: white;
    
        @keyframes fillBackground {
            0% {
            transform: translateX(-100%);
            }
            100% {
            transform: translateX(0);
            }
        }
    `}

    ${props =>
    props.FixedBackground &&
    css`
        z-index: 7;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(145, 159, 229, 1);
    `}
`


export const P = styled.p`
    z-index: 10;
    color: rgba(145, 159, 229, 1);
    position: relative; 
    margin-top: 0.3vh;

    ${props =>
    (props.AnimeP || props.FixedP) &&
    css`
        color: white;
    `}
`

export const InformationStep = styled.p`
    text-align: center;
`
