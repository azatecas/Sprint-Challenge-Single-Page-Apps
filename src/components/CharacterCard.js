import React from "react";

export default function CharacterCard({character}) {
  const {name, species, gender, image } = character;

  return (
    <div>
      <div>
        <img src={image} alt={`image of ${name}`}/>
      </div>
        <h1>{name}</h1>
        <h2>{species}</h2>
        <h2>{gender}</h2>
    </div>
  );
}
