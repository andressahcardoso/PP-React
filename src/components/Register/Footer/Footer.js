import {Button, NextButton} from "./FooterStyle"
import { Link } from "react-router-dom"

// Images
import NextButtonImg from "../../../assets/next.png"


function Footer(props) {
    return (
        <>
            <Link to={props.back}><Button>Voltar</Button></Link>
            <Link to={props.next}><NextButton src={NextButtonImg} alt="Próxima etapa"/></Link>
        </>
    )
}

export default Footer;