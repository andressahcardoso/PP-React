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

    function ConfigDirection() {
        navigate('/Config')
    }

    function UserAccount() {
        navigate('/User/Account')
    }

    return (
        <NavContainer>
            <img onClick={HomeDirection} src={Home} alt="Feed"/>
            <img onClick={SearchDirection} src={Search} alt="Pesquisar"/>
            <img onClick={AddPostDirection} src={AddPost} alt="Adicionar Publicação"/>
            <img onClick={ConfigDirection} src={Config} alt="Configurações"/>
            <img onClick={UserAccount} src={Profile} alt="Perfil do usuário"/>
        </NavContainer>
    )
}

export default Nav;