import {Button, NextButton} from "./FooterStyle"

// React Router
import { useNavigate } from 'react-router-dom';

// Images
import NextButtonImg from "../../../assets/next.png"
import { useTheme } from "../../../hooks/useTheme";

function Footer(props, {onClick}) {
    const {theme} = useTheme();

    const navigate = useNavigate();

    function goToBack() {
        navigate(props.back)
    }

    function goToNext() {
         navigate(props.next);
    }

    return (
        <>
            <Button onClick={goToBack}>Voltar</Button>
            <NextButton onClick={goToNext} src={NextButtonImg} alt="Próxima etapa"/>
        </>
    )
}

export default Footer;