import { NavContainer } from "./Nav.jsx";

// React Router
import { useNavigate } from 'react-router-dom';

// Icons
import Home from '../../assets/MenuIcons/Home.svg'
import Home2 from '../../assets/Icons/Home2.svg'
import Search from '../../assets/MenuIcons/Search_icon.svg'
import Search2 from '../../assets/Icons/Search_icon2.svg'
import AddPost from '../../assets/MenuIcons/Add_icon.svg'
import AddPost2 from '../../assets/Icons/Add_icon2.svg'
import Config from '../../assets/MenuIcons/Settings_icon.svg'
import Config2 from '../../assets/Icons/Settings_icon2.svg'
import Profile from '../../assets/MenuIcons/User_icon.svg'
import Profile2 from '../../assets/Icons/User_icon2.svg'

import { useTheme } from "../../hooks/useTheme";


function Nav() {

    let darkMode = false;

    const darkTheme = localStorage.getItem('themeColor');
    console.log('darkTheme :', darkTheme);
    if (darkTheme == 'black') {
        darkMode = true
    } else {
        darkMode = false
    }

    const {theme} = useTheme();
    
    const navigate = useNavigate();

    // Navigate functions
    function HomeDirection() {
        navigate('/Feed')
    }

    function SearchDirection() {
        navigate('/Search')
    }

    function AddPostDirection() {
        navigate('/Add/Post')
    }

    function ConfigDirection() {
        navigate('/Config')
    }

    function UserAccount() {
        navigate('/User/Account')
    }

    return (
        <NavContainer style={{ background: theme.background, color: theme.color}}>
            <img onClick={HomeDirection} src={darkMode ? Home2 : Home} alt="Feed"/>
            <img onClick={SearchDirection} src={darkMode ? Search2 : Search} alt="Pesquisar"/>
            <img onClick={AddPostDirection} src={darkMode ? AddPost2 : AddPost} alt="Adicionar Publicação"/>
            <img onClick={ConfigDirection} src={darkMode ? Config2 : Config} alt="Configurações"/>
            <img onClick={UserAccount} src={darkMode ? Profile2 : Profile} alt="Perfil do usuário"/>
        </NavContainer>
    )
}

export default Nav;