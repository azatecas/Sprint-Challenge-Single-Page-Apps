import React from "react";
import styled from 'styled-components';


const Title = styled.h1`
  color: #66e0ff;
  font-size: 30px;
  `


export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <Title>Welcome to the ultimate fan site!</Title>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </header>
    </section>
  );
}
