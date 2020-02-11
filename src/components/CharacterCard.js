import React from "react";
import styled from 'styled-components';

const MyDiv = styled.div`
  width: 300px;
  height: 500px;
  background-color: black;
  color: #66e0ff;
  border-radius: 20px;
  margin: 10px 0px;   
`   //end of MyDiv

const ImgDiv = styled.div`  
  border-radius: 20px;
`   //end ImgDiv

export default function CharacterCard({character}) {
  const {name, species, gender, image} = character;

  return (
    <MyDiv>
      <ImgDiv>
        <img src={image} alt={`image of ${name}`}/>
      </ImgDiv>
        <h1>Name: {name}</h1>
        <h2>Species: {species}</h2>
        <h2>Gender: {gender}</h2>
    </MyDiv>
  );
}
