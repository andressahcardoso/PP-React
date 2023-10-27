import { FeedComponent, OptionsComponent, Div, ImgOption, OptionsText, Categorie, FinalDiv} from "./Feed.jsx";

// React Router
import { useNavigate } from "react-router"
import { useContext } from "react";

// Components
import MainHeader from "../MainHeader/MainHeader";
import Nav from "../Nav/Nav";
import Post from "../Post/Post";

// Images
import storiesImg from '../../assets/storiesImg.svg'
import categories from '../../assets/categories.svg'
import commerce from '../../assets/commerce.svg'
import postImg from '../../assets/picture1.svg'
import PersonImg from '../../assets/user.svg'
import postImg2 from '../../assets/picture2.png'
import PersonImg2 from '../../assets/person2.svg'
import { AuthContext } from "../../context/AuthContext.js";
import { useAuthRedirect } from "../../hooks/useAuthRedirect.js";


function Feed() {

    const navigate = useNavigate()

    // useEffect(() => {
    //     const token = localStorage.getItem('token')
    //     if(!token) {
    //         navigate('/')
    //     }
    // }, [navigate])

    function goToFeedCommerce() {
        navigate('/Feed/Commerce')
    }

    function goToCategorie() {
        navigate('/Categorie')
    }

    function goToStories() {
        navigate('/Stories')
    }

    const { authenticated } = useContext(AuthContext);
    useAuthRedirect(authenticated);

    if (authenticated === true) {
        return (
            <>
                <MainHeader title='Finite'/>

                <OptionsComponent>
                    <Div>
                        <ImgOption onClick={goToStories} src={storiesImg}/>
                    </Div>
                    <Div>
                        <ImgOption onClick={goToCategorie} src={categories}/>
                    </Div>
                    <Div>
                        <ImgOption onClick={goToFeedCommerce} src={commerce}/>
                    </Div>
                </OptionsComponent>

                <OptionsText>
                    <h3>Stories</h3>
                    <Categorie>Categorias</Categorie>
                    <h3>Comércio</h3>
                </OptionsText>
                
                <FeedComponent>
                    <Post person={PersonImg} post={postImg} name={'Prabhas Raju'} acount={'@Praba_01'}/>
                    <Post person={PersonImg2} post={postImg2} name={'Malu'} acount={'@malukitalu'}/>

                    <FinalDiv>⠀⠀</FinalDiv>
                </FeedComponent>
                
                <Nav/>
            </>
        )
    }
}

export default Feed;