import { Div, Img, CommentDiv, CommentSpace, DivSpace, Profile, AlertText, ImgProfile, PersonName, PersonProfile, ImgIcon, ProfileDiv, UserComment, Community, CommentPost, ImgUser,CommentText, CommentMainUser, AddComment, DivImg, DivInput, Input, ImgComment, ImgPublish} from "./Comment.jsx";

// React Router
import { useNavigate } from "react-router"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

// Images
import postImg from '../../assets/picture1.svg'
import PersonImg from '../../assets/user.svg'
import user1 from '../../assets/user1.svg'
import user2 from '../../assets/user2.svg'
import user3 from '../../assets/user4.svg'

// Icons
import closeIcon from '../../assets/Icons/closeIcon.svg'
import publish from '../../assets/Icons/publish.svg'


// Api
import { api } from "../../services/api";


function Comment() {
    const navigate = useNavigate()
    
    const [ post, setPost ] = useState([]);
    const [ comments, setComments ] = useState([]);
    const [commentTitle, setCommentTitle] = useState('');
    const [comment, setComment] = useState('');
    
    const {post_id} = useParams([]);
    console.log('postID :', post_id);
    
    
    // Navigate function
    function goToPostsPage() {
        navigate('/Feed');
    }
    

                    
    useEffect(() => {
        const fetchData = async () => {                 
            try{
                const response = await api.post("/comment", {post_id: post_id});
                const commentList = response.data.data;
                setComments(commentList);
            } catch (err) {
                console.error(err);
            }
        };

        fetchData();
        console.log('comments :', comments);
    }, []);
                        
    
    const handleSubmit = async (e) => {
        e.preventDefault();
                            
        const userID = parseInt(localStorage.getItem('@Auth:id'));
        const postID = parseInt(post_id);
                            
        const data = {
            UserID: userID,
            PostID: postID,
            Comment: comment,
        }
    
        try{
            const response = await api.post("/comment/create", data);
            console.log('Post criado com sucesso:', response.data);

            try{
                const response = await api.post("/comment", {post_id: post_id});
                const commentList = response.data.data;
                setComments(commentList);
            } catch (err) {
                console.error(err);
            }
            console.log('comments :', comments);

        } catch (error) {
            console.error('Erro ao criar o post:', error);
        }
    };
                        
    return(
        <>
            <Div>
                <Img src={postImg}/>
            </Div>

            <CommentDiv>
                <Profile>
                    <ProfileDiv>
                        <ImgProfile src={PersonImg}/>
                        <div>
                            <PersonName>Prabhas Raju</PersonName>
                            <PersonProfile>@Praba_01</PersonProfile>
                        </div>
                    </ProfileDiv>

                    <ImgIcon onClick={goToPostsPage} src={closeIcon}/>
                </Profile>

                <UserComment>
                    <p>#Comentário do autor</p>
                </UserComment>

            <CommentSpace>
                  <DivSpace>    
                {comments.length > 0 ? (
                    comments.map((comment, index) => (
                        <Community key={index}>
                            <CommentPost>
                                <ImgUser src={user1}/>
                                <div>
                                    <PersonName>Usuário 1</PersonName>
                                    <CommentText>{comment.comment_content}</CommentText>
                                </div>
                            </CommentPost>
                        </Community>

                        ))
                        ) : (
                            <AlertText>Nenhum comentário para exibir!</AlertText>
                        )}
                       
                </DivSpace>  
                <AddComment>
                    <DivImg>
                        <ImgComment src={user3}/>
                    </DivImg>
                    <DivInput>
                        <Input value={comment}
                            onChange={(e) => setComment(e.target.value)}/>
                    </DivInput>
                    <ImgPublish src={publish} onClick={handleSubmit}/>
                </AddComment>
            </CommentSpace>
            </CommentDiv>
        </>
    )
}

export default Comment;