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


function Search() {
    
    const [userList, setUser] = useState([]); 
    
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredUsers, setFilteredUsers] = useState(userList);

    // Função para filtrar a lista de usuários com base no input de busca.
    const filterUsers = useCallback(() => {
        
        const filteredUsers = userList.filter((user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredUsers(filteredUsers);
    }, [searchTerm]);

    
    useEffect(() => {
        async function fetchUsers() { 
            try { 
                const response = await api.get('/listUser');
                setUser(response.data); 
                if (userList == 0 ){
                    setFilteredUsers(response.data)
                }
            } catch (error) {
                console.error('Erro ao recuperar usuários:', error);
            }
        }

        filterUsers()
        fetchUsers();
    }, [filterUsers]);
    

    return (
        <>
            <MainHeader title='Pesquisar'/>
               
            <SearchComponent>
                <div>
                    <DivInput>
                        <Input type="text" placeholder="Buscar por usuário" value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)} />
                        <ImgSearch src={searchIcon} alt="Icone de Pesquisa"/>
                    </DivInput>

                    <Div>
                        {filteredUsers.map((user) => (
                            <UserDiv key={user.idus}>
                                <DivUser>
                                    <Img src={user1}/>
                                    <div>
                                        <PersonName>{user.name}</PersonName>
                                        <PersonProfile>{user.userName}</PersonProfile>
                                    </div>  
                                </DivUser>

                                <Btn>Seguir</Btn>
                            </UserDiv>
                        ))}
                    </Div>
                </div>
            </SearchComponent>

            <Nav/>
        </>
    )
}

export default Search;