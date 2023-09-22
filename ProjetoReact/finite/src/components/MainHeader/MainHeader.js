import { HeaderComponent } from "./MainHeader.jsx";

// React Router
import { useNavigate } from "react-router-dom";

// Icon
import reportIcon from '../../assets/reportIcon.svg'
import rankingIcon from '../../assets/rankingIcon.svg'


function MainHeader(props) {

    const navigate = useNavigate();

    function goToReport() {
        navigate('/Report')
    }

    function goToRanking() {
        navigate('/Ranking')
    }

    return (
        <HeaderComponent>
            <img onClick={goToReport} src={reportIcon} alt="Relatório"></img>
            <h2>{props.title}</h2>
            <img onClick={goToRanking} src={rankingIcon} alt="Ranking"></img>
        </HeaderComponent>
    )
}

export default MainHeader;