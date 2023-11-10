import {HeaderContainer, Line, Background,  StepsContainer, Div, CircleStep, StepConclued, AnimatedBackground, FixedBackground, FixedP, P, InformationStep} from "./HeaderStyle"

import { useTheme } from "../../../hooks/useTheme";

function Header(props) {
    const {theme} = useTheme();
    
    return (
        <HeaderContainer>
            <Line></Line>
            <StepsContainer>
                <Div>
                    <CircleStep>
                        <StepConclued>
                            <Background AnimatedBackground={props.firstDiv} FixedBackground={props.firstBgc}/><P AnimeP={props.firstDiv} FixedP={props.firstBgc}>1</P><Background/>
                        </StepConclued>
                    </CircleStep>
                    <InformationStep>Informações</InformationStep>
                </Div>
                <Div>
                    <CircleStep>
                        <StepConclued>
                            <Background AnimatedBackground={props.secondDiv} FixedBackground={props.secondBgc}/><P AnimeP={props.secondDiv} FixedP={props.secondBgc}>2</P><Background/>
                        </StepConclued>
                    </CircleStep>
                    <InformationStep>Questionário</InformationStep>
                </Div>
                <Div>
                    <CircleStep>
                        <StepConclued>
                            <Background AnimatedBackground={props.thirdDiv} FixedBackground={props.thirdBgc}/><P AnimeP={props.thirdDiv} FixedP={props.thirdBgc}>3</P><Background/>
                        </StepConclued>
                    </CircleStep>
                    <InformationStep>Tema</InformationStep>
                </Div>
            </StepsContainer>  
        </HeaderContainer>
    )
}

export default Header;