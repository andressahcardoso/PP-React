import {Line, CircleStep, StepConclued, InformationStep, Div} from "./styled"

import {HeaderContainer, StepsContainer} from "./styled"

function Header() {
    return (
        <HeaderContainer>
            <Line></Line>
            <StepsContainer>
                <Div>
                    <CircleStep>
                        <StepConclued>1</StepConclued>
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

export default Header