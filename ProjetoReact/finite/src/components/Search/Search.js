import { SearchComponent, Input, ImgSearch, DivInput, Div, UserDiv, Img, PersonName, PersonProfile, Btn, DivUser} from "./Search.jsx";

// React Router
import React, { useState, useEffect, useCallback } from 'react';

// Components
import MainHeader from "../MainHeader/MainHeader.js";
import Nav from "../Nav/Nav.js";

// Icon
import searchIcon from '../../assets/Icons/searchIcon.svg'
import user1 from '../../assets/user1.svg'

// Api
import { api } from "../../services/api";

// Theme
import { useTheme } from "../../hooks/useTheme";

function Search() {
    // Hooks
    const [userList, setUser] = useState([]); 
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredUsers, setFilteredUsers] = useState(userList);
    const [isFollowing, setFollowing] = useState([]);

    const userId = localStorage.getItem('@Auth:id')
    

    // Theme
    const {theme} = useTheme();


    // Função para filtrar a lista de usuários com base no input de busca.
    const filterUsers = useCallback(() => {
        const filteredUsers = userList.filter((user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredUsers(filteredUsers);
    }, [searchTerm]);

    
    // UseEffect OnChange filterUsers
    useEffect(() => {
        async function fetchUsers() { 
            try { 
                const response = await api.post('/listUser', {userId: Number(userId)});
                
                setUser(response.data); 
                if (userList == 0 ){
                    setFilteredUsers(response.data)
                }

                const response2 = await api.post(`/informations/contact`, {userId: userId});
                setFollowing(response2.data.data)
            } catch (error) {
                console.error('Erro ao recuperar usuários:', error);
            }
        }

        filterUsers()
        fetchUsers();
    }, [filterUsers]);


    // Follow function
    const handleFollow = async (contactId) => {
        const data = {
            userIdLogin: userId, 
            contactId: Number(contactId)
        };
    
        try {
            await api.post('/createFollow', data);
            setFollowing([...isFollowing, { follower_id: contactId }]);
            window.location.reload();
        } catch (err) {
            console.error(err);
        }
    }

    // Unfollow function
    const handleUnfollow = async (contactId) => {
        window.location.reload();
        const data = {
            userIdLogin: userId,
            contactId: Number(contactId)
        }
    
        try {
            await api.post('/unfollow', data);
            window.location.reload();  
        } catch (err) {
            console.error(err);
        }
    }
    
    
    return (
        <div style={{ background: theme.background, color: theme.color}}>
            <MainHeader title='Pesquisar'/>
               
            <SearchComponent>
                <div>
                    <DivInput>
                        <Input type="text" placeholder="Buscar por usuário" value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)} />
                        <ImgSearch src={searchIcon} alt="Icone de Pesquisa"/>
                    </DivInput>

                    <Div>
                    {filteredUsers.map((user) => {
                        return(
                        <UserDiv key={user.idus}>
                            <DivUser>
                                <Img src={user1} />
                                <div>
                                    <PersonName>{user.name}</PersonName>
                                    <PersonProfile>{user.userName}</PersonProfile>
                                </div>
                            </DivUser>

                            {isFollowing.some((user_ID) => user_ID.follower_id === user.id) ? (
                                <Btn onClick={() => handleUnfollow(user.id)}>Unfollow</Btn>
                            ) : (
                                <Btn onClick={() => handleFollow(user.id)}>Follow</Btn>
                            )}
                        </UserDiv>
                        )
                    })}
                        
                    </Div>
                </div>
            </SearchComponent>

            <Nav/>
        </div>
    )
}

export default Search;