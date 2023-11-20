import { HeaderComponent } from "./MainHeader.jsx";

// React Router
import { useNavigate } from "react-router-dom";

// Icon
import reportIcon from '../../assets/reportIcon.svg'
import rankingIcon from '../../assets/rankingIcon.svg'
import reportIcon2 from '../../assets/MenuIcons/clock.svg'
import rankingIcon2 from '../../assets/MenuIcons/medalstar.svg'


function MainHeader(props) {
    const navigate = useNavigate();

    // Navigate functions
    function goToReport() {
        navigate('/Report')
    }

    function goToRanking() {
        navigate('/Ranking')
    }


    // Theme definition
    let darkMode = false;

    const darkTheme = localStorage.getItem('themeColor');
    if (darkTheme == 'black') {
        darkMode = true
    } else {
        darkMode = false
    }

    
    return (
        <HeaderComponent>
            <img onClick={goToReport} src={darkMode ? reportIcon2 : reportIcon} alt="Relatório"></img>
            <h2>{props.title}</h2>
            <img onClick={goToRanking} src={darkMode ? rankingIcon2 : rankingIcon} alt="Ranking"></img>
        </HeaderComponent>
    )
}

export default MainHeader;