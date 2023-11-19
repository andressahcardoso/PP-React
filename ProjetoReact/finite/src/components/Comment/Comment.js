import { Div, Img, CommentDiv1, CommentDiv2, CommentSpace, DivSpace, Profile, AlertText, ImgProfile, PersonName, PersonProfile, ImgIcon, ProfileDiv, UserComment, Community, CommentPost, ImgUser,CommentText, CommentMainUser, AddComment, DivImg, DivInput, Input, ImgComment, ImgPublish} from "./Comment.jsx";

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

import { useTheme } from "../../hooks/useTheme";


function Comment() {
    const navigate = useNavigate()

    const {theme} = useTheme();

    let darkMode = false;

    const darkTheme = localStorage.getItem('themeColor');
    console.log('darkTheme :', darkTheme);
    if (darkTheme == 'black') {
        darkMode = true
    } else {
        darkMode = false
    }

    const CommentDiv = darkMode ? CommentDiv2 : CommentDiv1

    
    const [ post, setPost ] = useState([]);
    const [ comments, setComments ] = useState([]);
    const [commentTitle, setCommentTitle] = useState('');
    const [comment, setComment] = useState('');
    const [objectData, setObjectData] = useState({});
    const [userImg, setUserImg] = useState({userPicture: "1700418589918_Mais Produtora -539.JPG"});
    
    const {post_id} = useParams([]);
    console.log('postID :', post_id);

    const images = 'http://localhost:3001/uploads/';
    
    
    // Navigate function
    function goToPostsPage() {
        navigate(-1);
    }

    const userId = localStorage.getItem('@Auth:id')
                    
    useEffect(() => {
        const fetchData = async () => {                 
            try{
                const postData = await api.post("/postComment", {post_id: post_id})
                setObjectData(postData.data.data[0]);
                console.log('postData.data.data[0] :', postData.data.data[0]);
                const response = await api.post("/comment", {post_id: post_id});
                const commentList = response.data.data;
                setComments(commentList);

                const user = await api.post("/getUser", {id: userId});
                console.log('user :', user.data[0]);
                setUserImg(user.data[0])
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
                console.log('===================commentList :', commentList);
                setComment('');
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
        <div style={{ background: theme.background, color: theme.color}}>
            <Div>
                <Img src={images + objectData.image}/>
            </Div>

            <CommentDiv >
                <Profile>
                    <ProfileDiv>
                        <ImgProfile src={images + objectData.picture}/>
                        <div>
                            <PersonName>{objectData.name}</PersonName>
                            <PersonProfile>{'@'+objectData.userName}</PersonProfile>
                        </div>
                    </ProfileDiv>

                    <ImgIcon onClick={goToPostsPage} src={closeIcon}/>
                </Profile>

                <UserComment>
                    <p>{objectData.Content}</p>
                </UserComment>

            <CommentSpace>
                  <DivSpace>    
                {comments.length > 0 ? (
                    comments.map((comment, index) => (
                        <Community key={index}>
                            <CommentPost>
                                <ImgUser src={images + comment.userPicture}/>
                                <div>
                                    <PersonName>{comment.name}</PersonName>
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
                        <ImgComment src={images + userImg.userPicture}/>
                    </DivImg>
                    <DivInput>
                        <Input value={comment}
                            onChange={(e) => setComment(e.target.value)}/>
                    </DivInput>
                    <ImgPublish src={publish} onClick={handleSubmit}/>
                </AddComment>
            </CommentSpace>
            </CommentDiv>
        </div>
    )
}

export default Comment;