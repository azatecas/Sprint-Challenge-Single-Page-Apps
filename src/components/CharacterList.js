import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';
import SearchForm from './SearchForm';
import styled from 'styled-components';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [ characters, setCharacters ] = useState([]);

  const [ search, setSearch ] = useState('');

  

  const handleChange = e => {        
    setSearch(e.target.value);
  }

  // console.log('this is characters', characters);


  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

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

  `
  

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
