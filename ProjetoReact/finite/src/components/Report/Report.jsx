import styled from "styled-components";

export const HeaderComponent = styled.section`
    width: 92vw;
    padding: 4vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
`

export const AddPostComponent = styled.section`
    height: 80.5vh;
    display: flex;
    justify-content: center;
    align-content: start;
    flex-wrap: wrap;
`

export const OptionButton = styled.div`
    grid-area: button-login-register;
    display: inline-block;
    text-align: center;
    margin-top: 2%;
`

export const Publication = styled.button`
    z-index: ${({ active }) => (active ? 1 : 2)};
    position: relative;
    color: white;
    font-size: 18px;
    
    margin-right: -18%;
    padding: 3.5%;
    padding-left: 14vw;
    padding-right: 14vw;

    background-color: ${({ active }) => (active ? 'rgba(145, 159, 229, 1)' : 'rgb(182, 194, 246)')};
    border: solid 1px ${({ active }) => (active ? 'rgb(173, 185, 243)' : 'rgba(145, 159, 229, 1)')};
    border: solid 1px rgba(145, 159, 229, 1);
    border-radius: 30px;  
`

export const Stories = styled.button`
    z-index: ${({ active }) => (active ? 1 : -1)};
    color: white;
    font-size: 18px;

    padding: 3.5%;
    padding-left: 30vw;
    padding-right: 14vw;

    background-color: ${({ active }) => (active ? 'rgba(145, 159, 229, 1)' : 'rgb(182, 194, 246)')};
    border: solid 1px ${({ active }) => (active ? 'rgba(145, 159, 229, 1)' : 'rgb(173, 185, 243)')};
    border: solid 1px rgb(173, 185, 243);
    border-radius: 30px;
`


// Start | Report Area

export const TimeDiv = styled.div`
    width: 100vw;
    padding: 10vw;
    padding-top: 8vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Time = styled.div`
    width: 40vw;
    height: 18vh;
    border: 8px solid rgb(173, 185, 243);
    border-radius: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Num = styled.p`
    font-size: 44px;
    font-weight: 500;
`

export const Text = styled.p`
    font-size: 18px;
    text-align: center;
`

export const Text2 = styled.p`
    font-size: 18px;
    text-align: center;
    margin-top: 0.8vh;
`

export const TextDiv = styled.div`
    width: 80vw;
    height: 4vh;
    margin-top: 2vh;
    padding: 1vw;
    border: 2px solid rgb(173, 185, 243);
    border-radius: 50px;
`

export const PostDiv = styled.div`
    width: 100vw;
    height: 30vh;
    margin-top: 0vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Num2 = styled.p`
    font-size: 60px;
    font-weight: 500;
    margin-top: -2vh;
    margin-left: 2vw;
    position: sticky;
    z-index: 5;
`

export const Div = styled.div`
    margin-left: -8vw;
    z-index: 2;
`

export const Img = styled.img`
    height: 8vh;
`