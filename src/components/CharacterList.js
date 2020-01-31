import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [ characters, setCharacters ] = useState([]);

  console.log('this is characters', characters);


  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

    axios
      // .get('https://rickandmortyapi.com/api/character')
      .then(res => {
        console.log(res);
        setCharacters(res.data.results)
      })
      .catch(error => {
        console.log('this is CharacterList Error', error);
      })

  }, []);

  return (
    <section className="character-list">
      <h2>TODO: `array.map()` over your state here!</h2>

      {characters.map(item => {
        <CharacterCard character={item} />
      })}
    </section>
  );
}
