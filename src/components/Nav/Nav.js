import { NavContainer } from "./Nav.jsx";

// Images

import Home from '../../assets/MenuIcons/Home.svg'
import Search from '../../assets/MenuIcons/Search_icon.svg'
import AddPost from '../../assets/MenuIcons/Add_icon.svg'
import Config from '../../assets/MenuIcons/Settings_icon.svg'
import Profile from '../../assets/MenuIcons/User_icon.svg'
import { Link } from "react-router-dom";

function Nav() {
    return (
        <NavContainer>
           <Link to="/Feed"><img src={Home}/></Link>
            <img src={Search}/>
            <img src={AddPost}/>
            <img src={Config}/>
            <img src={Profile}/>
        </NavContainer>
    )
}

export default Nav;