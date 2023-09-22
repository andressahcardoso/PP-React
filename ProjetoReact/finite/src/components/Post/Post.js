import { PostContainer, Img, ImgProfile, Profile, PersonName, PersonProfile, Interaction, DivBtn, Text, ImgIcon, ImgIconRight } from "./Post.jsx";

// React Router
import { useNavigate } from 'react-router-dom';

// Images
import comment from '../../assets/MenuIcons/comment.svg'
import like from '../../assets/MenuIcons/like.svg'
import send from '../../assets/MenuIcons/send.svg'
import save from '../../assets/MenuIcons/save.svg'


function Post(props) {

    const navigate = useNavigate();

    function goToComment() {
        navigate('/Comment')
    }

    return (
        <PostContainer>
            <Profile>
                <ImgProfile src={props.person}/>
                <div>
                    <PersonName>{props.name}</PersonName>
                    <PersonProfile>{props.acount}</PersonProfile>
                </div>
            </Profile>
            <Img src={props.post}/>

            <Interaction>
                    <DivBtn>
                        <ImgIcon onClick={goToComment} src={comment}/>
                        <Text>10</Text>
                        <ImgIcon src={like}/>
                        <Text>122</Text>
                    </DivBtn>

                    <DivBtn>
                        <ImgIconRight src={send}/>
                        <ImgIconRight src={save}/>
                    </DivBtn>
            </Interaction>
        </PostContainer>
    )
}

export default Post;