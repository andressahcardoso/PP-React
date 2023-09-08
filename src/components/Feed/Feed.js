import MainHeader from "../MainHeader/MainHeader";
import Nav from "../Nav/Nav";
import Post from "../Post/Post";
import { FeedComponent } from "./Feed.jsx";



function Feed() {
    return (
        <>
        <MainHeader/>
        
        <FeedComponent>
            <Post/>
            <Post/>
        </FeedComponent>

        <Nav/>
        </>

    )
}

export default Feed;