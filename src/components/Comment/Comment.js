import { CommentComponent, Div, Img, CommentDiv, Profile, ImgProfile, DivProfile, PersonName, PersonProfile, ImgIcon, ProfileDiv, UserComment, Community, CommentPost, ImgUser,CommentText, CommentMainUser, AddComment, DivImg, DivInput, Input, ImgComment, ImgPublish} from "./Comment.jsx";

import { useNavigate } from "react-router"

// Images
import postImg from '../../assets/picture1.svg'
import PersonImg from '../../assets/user.svg'

import user1 from '../../assets/user1.svg'
import user2 from '../../assets/user2.svg'
import user3 from '../../assets/user4.svg'

// Icons
import closeIcon from '../../assets/Icons/closeIcon.svg'
import publish from '../../assets/Icons/publish.svg'

function Comment() {
    const navigate = useNavigate()

    function goToPostsPage() {
        navigate(-1);
    }


    return(
        <CommentComponent>
            <Div>
                <Img src={postImg}/>
            </Div>

            <CommentDiv>
                <Profile>
                    <ProfileDiv>
                        <ImgProfile src={PersonImg}/>
                        <DivProfile>
                            <PersonName>Prabhas Raju</PersonName>
                            <PersonProfile>Comentário usuário 2</PersonProfile>
                        </DivProfile>
                    </ProfileDiv>

                    <ImgIcon onClick={goToPostsPage} src={closeIcon}/>
                </Profile>

                <UserComment>
                    <p>#Comentário do autor</p>
                </UserComment>

                <Community>
                    <CommentPost>
                        <ImgUser src={user1}/>
                        <DivProfile>
                            <PersonName>Usuário 1</PersonName>
                            <CommentText>Comentário usuário 1</CommentText>
                        </DivProfile>
                    </CommentPost>

                    <CommentPost>
                        <ImgUser src={user2}/>
                        <DivProfile>
                            <PersonName>Usuário 2</PersonName>
                            <CommentText>Comentário usuário 3 texto texto texto 
                                texto texto texto texto texto texto texto 
                                texto texto texto texto texto texto texto 
                                texto texto texto texto texto </CommentText>
                        </DivProfile>
                    </CommentPost>

                    <CommentMainUser>
                        <ImgUser src={user3}/>
                        <DivProfile>
                            <PersonName>Você</PersonName>
                            <CommentText>Seu comentário</CommentText>
                        </DivProfile>
                    </CommentMainUser>

                </Community>

                <AddComment>
                    <DivImg>
                        <ImgComment src={user3}/>
                    </DivImg>
                    <DivInput>
                        <Input></Input>
                    </DivInput>
                    <ImgPublish src={publish}/>
                </AddComment>
            </CommentDiv>
        </CommentComponent>
    )
}

export default Comment;