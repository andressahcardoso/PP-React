import { FeedComponent, OptionsComponent, Div, ImgOption, OptionsText, Categorie, FinalDiv, DivArea} from "./Feed.jsx";

// React 
import { useEffect, useState } from "react";
import { useNavigate } from "react-router"

// Components
import MainHeader from "../MainHeader/MainHeader";
import Nav from "../Nav/Nav";
import Post from "../Post/Post";

// Images
import storiesImg from '../../assets/storiesImg.svg'
import categories from '../../assets/categories.svg'
import commerce from '../../assets/commerce.svg'

// Api
import { api } from "../../services/api";

// Theme
import { useTheme } from "../../hooks/useTheme";


function Feed() {
    const navigate = useNavigate()
    
    // Navigate functions
    function goToFeedCommerce(titleFeed) {
        navigate(`/Feed/Commerce/${titleFeed}`)
    }
    
    function goToCategorie() {
        navigate('/Categorie')
    }
    
    function goToStories() {
        navigate('/Stories')
    }
    
    // Theme definition
    const {theme} = useTheme();


    // Hooks
    const [posts, setPosts] = useState([]); 


    // UseEffect Onload
    useEffect(() => {
        async function fetchPosts() {
            try {
                const response = await api.get('/posts'); 
                setPosts(response.data); 
            } catch (error) {
                console.error('Erro ao recuperar os posts:', error);
            }
        }

        fetchPosts();
    }, []);

    
    return (
        <DivArea style={{ background: theme.background, color: theme.color}}>
            <MainHeader title='Finite'/>

            <OptionsComponent>
                <Div>
                    <ImgOption onClick={goToStories} src={storiesImg}/>
                </Div>
                <Div>
                    <ImgOption onClick={goToCategorie} src={categories}/>
                </Div>
                <Div>
                    <ImgOption onClick={(e) => {e.preventDefault(); goToFeedCommerce('Comércio');}} src={commerce}/>
                </Div>
            </OptionsComponent>

            <OptionsText>
                <h3>Stories</h3>
                <Categorie>Categorias</Categorie>
                <h3>Comércio</h3>
            </OptionsText>
                
            <FeedComponent>
                <Post posts={posts}/>
                   
                <FinalDiv>⠀⠀</FinalDiv>
            </FeedComponent>
                
            <Nav/>
        </DivArea>
    )
}

export default Feed;