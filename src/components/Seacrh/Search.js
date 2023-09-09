import { SearchComponent, Input, ImgSearch, DivInput, Div, UserDiv, Img, PersonName, PersonProfile, Btn, DivUser} from "./Search.jsx";

// React Router
import React, { useState } from 'react';

// Components
import MainHeader from "../MainHeader/MainHeader";
import Nav from "../Nav/Nav";

// Icon
import searchIcon from '../../assets/Icons/searchIcon.svg'
import user1 from '../../assets/user1.svg'
import user2 from '../../assets/user2.svg'
import user3 from '../../assets/user3.svg'
import user4 from '../../assets/user4.svg'
import user5 from '../../assets/user1.svg'


// Lista fixa de usuários - APENAS PARA TESTE INICIAL
const userList = [
    { id: 1, name: 'Alice', picture:user1, acount:'alice_01'},
    { id: 2, name: 'Bob', picture:user2, acount:'bob_02' },
    { id: 3, name: 'Charlie', picture:user3, acount:'charlie_03' },
    { id: 4, name: 'David', picture:user4, acount:'david_04' },
    { id: 5, name: 'Eve', picture:user5, acount:'eve_05' },
];


function Search() {

    const [searchTerm, setSearchTerm] = useState('');
    const [filteredUsers, setFilteredUsers] = useState([]);

    // Função para filtrar a lista de usuários com base no input de busca
    const filterUsers = () => {
        const filteredUsers = userList.filter((user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredUsers(filteredUsers);
    };

    // Chama a função de filtro sempre que o input muda
    React.useEffect(() => {
        filterUsers();
    }, [searchTerm]);


    return (
        <>
            <MainHeader title='Pesquisar'/>
            
            <SearchComponent>
                <div>
                    <DivInput>
                        <Input type="text" placeholder="Buscar por usuário" value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)} />
                        <ImgSearch src={searchIcon}/>
                    </DivInput>

                    <Div>
                        {filteredUsers.map((user) => (
                            <UserDiv key={user.idus}>
                                <DivUser>
                                    <Img src={user.picture}/>
                                    <div>
                                        <PersonName>{user.name}</PersonName>
                                        <PersonProfile>{user.acount}</PersonProfile>
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