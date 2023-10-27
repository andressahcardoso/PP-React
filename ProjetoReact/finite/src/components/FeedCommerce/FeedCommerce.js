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
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext.js";
import { useAuthRedirect } from "../../hooks/useAuthRedirect.js";


function FeedCommerce() {

    const {authenticated} = useContext(AuthContext);
    useAuthRedirect(authenticated);

    if (authenticated === true) {
        return (
            <>
                <MainHeader title='Comércio'/>
                
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

export default FeedCommerce;