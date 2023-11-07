import { FeedComponent, FinalDiv } from "./FeedCommerce.jsx";

// Components
import MainHeader from "../MainHeader/MainHeader";
import Nav from "../Nav/Nav";
import Post from "../Post/Post";

// React
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Api
import { api } from "../../services/api";


function FeedCommerce(props) {

    const {titleFeed} = useParams()
       
    const [posts, setPosts] = useState([]); 

    useEffect(() => {
        async function fetchPosts() {    
            try {
                if (titleFeed === 'Comércio'){
                    const response = await api.get('/post/commerce');
                    setPosts(response.data); 
                } else {  
                    const response = await api.post('/category', {titleFeed: titleFeed});
                    setPosts(response.data); 
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