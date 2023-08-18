import {HeaderContainer, Line, StepsContainer, Div, CircleStep, StepConclued, AnimatedBackground, P, InformationStep} from "./HeaderStyle"

function Header() {
    return (
        <HeaderContainer>
            <Line></Line>
            <StepsContainer>
                <Div>
                    <CircleStep>
                        <StepConclued>
                            <AnimatedBackground/><P>1</P><AnimatedBackground />
                        </StepConclued>
                    </CircleStep>
                    <InformationStep>Informações</InformationStep>
                </Div>
                <Div>
                    <CircleStep>
                        <StepConclued>2</StepConclued>
                    </CircleStep>
                    <InformationStep>Questionário</InformationStep>
                </Div>
                <Div>
                    <CircleStep>
                        <StepConclued>3</StepConclued>
                    </CircleStep>
                    <InformationStep>Tema</InformationStep>
                </Div>
            </StepsContainer>  
        </HeaderContainer>
    )
}

export default Header;