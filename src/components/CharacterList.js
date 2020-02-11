import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';
import SearchForm from './SearchForm';
import styled from 'styled-components';

export default function CharacterList() {
  const [ characters, setCharacters ] = useState([]);
  const [ search, setSearch ] = useState(''); 
  const handleChange = e => {        
    setSearch(e.target.value);
  }

  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/character')
      .then(res => {
        console.log(res);
        const characterSearch = res.data.results.filter(item =>
          item.name.toLowerCase().includes(search.toLocaleLowerCase()))
        setCharacters(characterSearch);
      })
      .catch(error => {
        console.log('this is CharacterList Error', error);
      })
  }, [search]);

  const StyleSection = styled.section`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  ` //end of StyleSection

  return (
    <div>
    <SearchForm search={search} handleChange={handleChange}/>      
    <StyleSection >
      {characters.map(item => {
        return <CharacterCard character={item} key={item.id}/>
      })}
    </StyleSection>
    </div>
  );
}
