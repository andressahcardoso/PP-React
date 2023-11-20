import { HeaderComponent, Settings, BtnDiv, Pfoto, Cancel, FotoDiv, Save, InputText, User, ImgDiv, Img, TextDiv, Icon, Text, Div, Title, Title2, Information, Icon2, Icon3 } from "./UserSettings.jsx";

// React Router
import { useNavigate } from "react-router-dom";

// Components
import Nav from "../Nav/Nav";

// Icons
import previous from '../../assets/Icons/backIcon.svg'
import edit from '../../assets/Icons/editIcon.svg'

// Images
import userImage from '../../assets/Icons/user.svg'
import { useEffect, useState } from "react";

// Api
import { api } from "../../services/api";

import { useTheme } from "../../hooks/useTheme";

function UserSettings() {
    const navigate = useNavigate();
    
    // Navigate functions
    function goToBack() {
        navigate(-1)
    }

    const handleCancel = () => {
        navigate('/User/Account')
    }
    
    // Hooks  
    const [isEditing, setIsEditing] = useState(false);
    const [isEditing2, setIsEditing2] = useState(false);
    const [isEditing3, setIsEditing3] = useState(false);
    const [newName, setNewName] = useState();
    const [newUserName, setNewUserName] = useState();
    const [newDescription, setNewDescription] = useState();
    const [image, setImage] = useState('');
    const [preview, setPreview] = useState('');
    
    const userId = localStorage.getItem('@Auth:id')
    

    // Theme definition
    const {theme} = useTheme();
  
    
    // Is Editing
    const handleEditClick = () => {
      setIsEditing(true);
    };

    const handleEditClick2 = () => {
        setIsEditing2(true);
    };

    const handleEditClick3 = () => {
        setIsEditing3(true);
    };

    const handleInputChange = (e) => {
      setNewName(e.target.value);
    };

    const handleInputChange2 = (e) => {
        setNewUserName(e.target.value);
    };

    const handleInputChange3 = (e) => {
        setNewDescription(e.target.value);
    };


    // UseEffect Onload
    useEffect(() => {
        // Define a imagem inicial.
        const initialImageUrl = userImage;
        setPreview(initialImageUrl);
    }, []); 
    

    function handleImageChange(e) {
        setImage(e.target.files[0]);
        setPreview(URL.createObjectURL(e.target.files[0]));
    }

    const handleImageClick = () => {
        // Ativar click no input que está oculto.
        document.getElementById('imageInput').click();        
    };


    useEffect(() => {
        const fetchData = async () => {                 
            try{
                const postData = await api.post("/userInfo", {userId: userId})
                console.log('postData :', postData);
                setNewName(postData.data.data[0].name)
                setNewUserName(postData.data.data[0].userName)
                setNewDescription(postData.data.data[0].description)
            } catch (err) {
                console.error(err);
            }
        };

        fetchData();
      }, []); 


      const handleSubmit = async (e) => {
        e.preventDefault();
                            
        const userID = parseInt(localStorage.getItem('@Auth:id'));
                      
        let formData = new FormData();
        formData.append('userId', userID)
        formData.append('name', newName)
        formData.append('userName', newUserName)
        formData.append('description', newDescription)
        formData.append('file', image)
    
        try{
            const response = await api.post("/userUpdate", formData);
            console.log('Post criado com sucesso:', response.data);
            navigate('/User/Account')

        } catch (error) {
            console.error('Erro ao criar o post:', error);
        }
    };


    return (
        <div style={{ background: theme.background, color: theme.color}}>
            <HeaderComponent>
                <h2>Configurações do Perfil</h2>
                <img onClick={goToBack} src={previous} alt="Back"></img>
            </HeaderComponent>

            <Settings>
                <User>
                    <ImgDiv>
                        {preview && (
                            <Img src={preview} alt="Imagem selecionada" />
                        )}
                    </ImgDiv>
                    <TextDiv onClick={handleImageClick}>
                        <Pfoto>Alterar foto</Pfoto>
                        <Icon src={edit}/>
                        <Title2 type="file" 
                            name="image" 
                            accept="image/*" 
                            multiple={false} 
                            onChange={ handleImageChange }  id="imageInput"></Title2>
                    </TextDiv>
                </User>

                <Div>
                    <Title>Nome</Title>
                    <Information onClick={handleEditClick}>
                    {isEditing ? (
                        <>
                            <InputText type="text" value={newName} onChange={handleInputChange} />
                        </>
                        ) : (
                        <>
                           <Text>{newName}</Text>
                            <Icon2 src={edit}/>
                        </>
                    )}
                    </Information>
                </Div>

                <Div>
                    <Title>Nome de usuário</Title>
                    <Information onClick={handleEditClick2}>
                    {isEditing2 ? (
                        <>
                            <InputText type="text" value={newUserName} onChange={handleInputChange2} />
                        </>
                        ) : (
                        <>
                           <Text>{'@'+newUserName}</Text>
                        <Icon2 src={edit}/>
                        </>
                    )}
                        
                    </Information>
                </Div>

                <Div>
                    <Title>Descrição</Title>
                    <Information onClick={handleEditClick3}>
                    {isEditing3 ? (
                        <>
                            <InputText type="text" value={newDescription} onChange={handleInputChange3} />
                        </>
                        ) : (
                        <>
                           <Text>{newDescription}</Text>
                        <Icon2 src={edit}/>
                        </>
                    )}
                    </Information>
                </Div>

                <BtnDiv>
                    <Cancel onClick={handleCancel}>Cancelar</Cancel>
                    <Save onClick={handleSubmit}>Salvar</Save>
                </BtnDiv>
                
            </Settings>
            <Nav/>
        </div>
    )
}

export default UserSettings;