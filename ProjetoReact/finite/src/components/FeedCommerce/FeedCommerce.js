import { FeedComponent, FinalDiv } from "./FeedCommerce.jsx";

// Components
import MainHeader from "../MainHeader/MainHeader";
import Nav from "../Nav/Nav";
import Post from "../Post/Post";

// Images
import postImg from '../../assets/postImg.svg'
import PersonImg from '../../assets/user.svg'
import postImg2 from '../../assets/postImg2.svg'
import PersonImg2 from '../../assets/person2.svg'
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";


function FeedCommerce(props) {

        const {titleFeed} = useParams()
        
        const [posts, setPosts] = useState([]); // Estado para armazenar os posts

        useEffect(() => {
            async function fetchPosts() {
                
                try {
                    if (titleFeed === 'Comércio'){
                        const response = await axios.get('http://localhost:3001/api/post/commerce');
                        setPosts(response.data); // Armazena os posts no estado
                    } else {  
                        console.log('aaaaaaaaaaaaaaa')
                        const response = await axios.post('http://localhost:3001/api/category', {titleFeed: titleFeed});
                        setPosts(response.data); // Armazena os posts no estado
                    }
                } catch (error) {
                    console.error('Erro ao recuperar os posts:', error);
                }
            }

            fetchPosts();
        }, [titleFeed]);

        return (
            <>
                <MainHeader title={titleFeed}/>
                
                <FeedComponent>
                    <Post posts={posts}/>

                    <FinalDiv>⠀⠀</FinalDiv>
                </FeedComponent>

                <Nav/>
            </>

        )
}

export default FeedCommerce;