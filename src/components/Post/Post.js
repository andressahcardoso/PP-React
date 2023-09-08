import { PostContainer, Img, ImgProfile, Profile, PersonName, PersonProfile, Div, Interaction, DivBtn, Text, ImgIcon } from "./Post.jsx";

// Images

import comment from '../../assets/MenuIcons/comment.svg'
import like from '../../assets/MenuIcons/like.svg'
import send from '../../assets/MenuIcons/send.svg'
import save from '../../assets/MenuIcons/save.svg'
import { Link } from "react-router-dom";

function Post(props) {
    return (
        <PostContainer>
            <Profile>
                <ImgProfile src={props.person}/>
                <Div>
                    <PersonName>{props.name}</PersonName>
                    <PersonProfile>{props.acount}</PersonProfile>
                </Div>
            </Profile>
            <Img src={props.post}/>

            <Interaction>
                    <DivBtn>
                        <Link to='/Comment'><ImgIcon src={comment}/></Link>
                        <Text>10</Text>
                        <Link to='/Comment'><ImgIcon src={like}/></Link>
                        <Text>122</Text>
                    </DivBtn>

                    <DivBtn>
                        <Link to='/Comment'><ImgIcon src={send}/></Link>
                        <Link to='/Comment'><ImgIcon src={save}/></Link>
                    </DivBtn>

                </Interaction>

        </PostContainer>
    )
}

export default Post;