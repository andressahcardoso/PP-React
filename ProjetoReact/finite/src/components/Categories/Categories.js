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
import all2 from '../../assets/Icons/all2.PNG'
import music2 from '../../assets/Icons/music2.svg'
import sport2 from '../../assets/Icons/basketball.svg'
import nature2 from '../../assets/Icons/leaf.svg'
import education2 from '../../assets/Icons/book.svg'
import searchIcon2 from '../../assets/Icons/searchIcon.svg'

import { useTheme } from "../../hooks/useTheme";





function Categorie() {
    
    // Lista fixa de categorias | Iguais as do BD.
    let darkMode = false;

    const darkTheme = localStorage.getItem('themeColor');
    console.log('darkTheme :', darkTheme);
    if (darkTheme == 'black') {
        darkMode = true
    } else {
        darkMode = false
    }

    let userList = [
        { id: 1, name: 'Diversos', picture:  darkMode ? all2 : all},
        { id: 2, name: 'Músicas', picture: darkMode ? music2 : music},
        { id: 3, name: 'Atividades e Esportes', picture: darkMode ? sport2 : sport},
        { id: 4, name: 'Natureza e Paisagem', picture: darkMode ? nature2 : nature},
        { id: 5, name: 'Educação', picture: darkMode ? education2 : education},
    ];

    const {theme} = useTheme();


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
        <div style={{ background: theme.background, color: theme.color}}>
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
        </div>
    )
}

export default Categorie;