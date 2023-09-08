import { PostContainer, Img, ImgProfile, Profile, PersonName, PersonProfile, Div, Interaction, DivBtn, Text, ImgIcon } from "./Post.jsx";

// Images

import comment from '../../assets/MenuIcons/comment.svg'
import like from '../../assets/MenuIcons/like.svg'
import send from '../../assets/MenuIcons/send.svg'
import save from '../../assets/MenuIcons/save.svg'

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
                        <ImgIcon src={comment}/>
                        <Text>10</Text>
                        <ImgIcon src={like}/>
                        <Text>122</Text>
                    </DivBtn>

                    <DivBtn>
                        <ImgIcon src={send}/>
                        <ImgIcon src={save}/>
                    </DivBtn>

                </Interaction>

        </PostContainer>
    )
}

export default Post;