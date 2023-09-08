import { HeaderComponent, Img, P} from "./MainHeader.jsx";

// Images

import reportIcon from '../../assets/reportIcon.svg'
import rankingIcon from '../../assets/rankingIcon.svg'


function MainHeader() {
    return (
        <HeaderComponent>
            <img src={reportIcon}></img>
            <h2>Comércio</h2>
            <img src={rankingIcon}></img>
        </HeaderComponent>
    )
}

export default MainHeader;