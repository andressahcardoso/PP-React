import { FeedComponent, OptionsComponent, Div, ImgOption, OptionsText, Categorie, FinalDiv} from "./Feed.jsx";

// React Router
import { useNavigate } from "react-router"

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
import { useEffect, useState } from "react";

import axios from "axios";
// import { base64_decode } from "../../../../finite-api/src/convertBitToFile.js";
// var fs = require('fs');

// function base64_decode(base64str,fileName){
//     var bitmap = new Buffer (base64str, 'base64');
//     fs.writeFileSync('src/temp/'+fileName+'',bitmap, 'binary', function (err){
//       if(err){
//         console.log('Conversao com erro');
//       }
//     } );
//   } 

function Feed() {

    const navigate = useNavigate()

    // useEffect(() => {
    //     const token = localStorage.getItem('token')
    //     if(!token) {
    //         navigate('/')
    //     }
    // }, [navigate])

    function goToFeedCommerce(titleFeed) {
        navigate(`/Feed/Commerce/${titleFeed}`)
    }
    
    function goToCategorie() {
        navigate('/Categorie')
    }

    function goToStories() {
        navigate('/Stories')
    }



    const [posts, setPosts] = useState([]); // Estado para armazenar os posts

    useEffect(() => {
        async function fetchPosts() {
        try {
            const response = await axios.get('http://localhost:3001/api/posts'); // Atualize a URL conforme necessário
            // response.forEach(function (item){
            //     try{
            //         base64_decode(item.file, item.fileName)
            //     } catch (e) {
            //         console.log('errinho eee')
            //     }
            // });
            setPosts(response.data); // Armazena os posts no estado
            console.log('------------response.data :', response.data);
        } catch (error) {
            console.error('Erro ao recuperar os posts:', error);
        }
        }

        fetchPosts();
    }, []);

    
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
                    {/* <Post person={PersonImg2} post={postImg2} name={'Malu'} acount={'@malukitalu'}/> */}

                    <FinalDiv>⠀⠀</FinalDiv>
                </FeedComponent>
                
                <Nav/>
            </>
        )
}

export default Feed;