import { NavContainer } from "./Nav.jsx";

// React Router
import { useNavigate } from 'react-router-dom';

// Icons
import Home from '../../assets/MenuIcons/Home.svg'
import Search from '../../assets/MenuIcons/Search_icon.svg'
import AddPost from '../../assets/MenuIcons/Add_icon.svg'
import Config from '../../assets/MenuIcons/Settings_icon.svg'
import Profile from '../../assets/MenuIcons/User_icon.svg'


function Nav() {

    const navigate = useNavigate();

    function HomeDirection() {
        navigate('/Feed')
    }

    function SearchDirection() {
        navigate('/Search')
    }

    function AddPostDirection() {
        navigate('/Add/Post')
    }

    return (
        <NavContainer>
            <img onClick={HomeDirection} src={Home}/>
            <img onClick={SearchDirection} src={Search}/>
            <img onClick={AddPostDirection} src={AddPost}/>
            <img src={Config}/>
            <img src={Profile}/>
        </NavContainer>
    )
}

export default Nav;