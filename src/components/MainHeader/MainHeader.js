import { HeaderComponent } from "./MainHeader.jsx";

// Images

import reportIcon from '../../assets/reportIcon.svg'
import rankingIcon from '../../assets/rankingIcon.svg'


function MainHeader(props) {
    return (
        <HeaderComponent>
            <img src={reportIcon} alt="Relatório"></img>
            <h2>{props.title}</h2>
            <img src={rankingIcon} alt="Ranking"></img>
        </HeaderComponent>
    )
}

export default MainHeader;