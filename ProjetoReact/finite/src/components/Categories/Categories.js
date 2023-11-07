import { SearchComponent, Input, ImgSearch, DivInput, ConfigDiv, ConfigOption, Img, Text, ImgDiv } from "./Categories.jsx";

// React Router
import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from "react-router"

// Components
import MainHeader from "../MainHeader/MainHeader";
import Nav from "../Nav/Nav";

// Icon
import all from '../../assets/Icons/allIcon.svg'
import music from '../../assets/Icons/music.svg'
import sport from '../../assets/Icons/sport.svg'
import nature from '../../assets/Icons/nature.svg'
import education from '../../assets/Icons/education.svg'
import searchIcon from '../../assets/Icons/searchIcon.svg'



// Lista fixa de categorias | Iguais as do BD.
const userList = [
    { id: 1, name: 'Diversos', picture: all},
    { id: 2, name: 'Músicas', picture: music},
    { id: 3, name: 'Atividades e Esportes', picture: sport},
    { id: 4, name: 'Natureza e Paisagem', picture: nature},
    { id: 5, name: 'Educação', picture: education},
];

function Categorie() {
    const navigate = useNavigate()
    
    // Navigate functions
    function goToFeedCommerce(titleFeed) {
        navigate(`/Feed/Commerce/${titleFeed}`)
    }

    // Hooks
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredUsers, setFilteredUsers] = useState([]);

    // Função para filtrar a lista de usuários com base no input de busca
    const filterUsers = useCallback(() => {
        const filteredUsers = userList.filter((categorie) =>
            categorie.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredUsers(filteredUsers);
    }, [searchTerm]);

    // Chama a função de filtro sempre que o input muda
    useEffect(() => {
        filterUsers();
    }, [searchTerm, filterUsers]);


    return (
        <>
            <MainHeader title='Categorias'/>
                
            <SearchComponent>
                <div>
                    <DivInput>
                        <Input type="text" placeholder="Buscar por categoria" value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)} />
                        <ImgSearch src={searchIcon}/>
                    </DivInput>

                    <div>
                        {filteredUsers.map((categorie) => (
                            <ConfigDiv onClick={(e) => {e.preventDefault(); goToFeedCommerce(categorie.name);}}>
                                <ConfigOption>
                                    <ImgDiv>
                                        <Img src={categorie.picture}/>
                                    </ImgDiv>
                                    <Text>{categorie.name}</Text>
                                </ConfigOption>
                            </ConfigDiv>
                        ))}
                    </div>
                </div>
            </SearchComponent>

            <Nav/>
        </>
    )
}

export default Categorie;