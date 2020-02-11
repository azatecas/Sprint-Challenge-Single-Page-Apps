import React from "react";
import styled from 'styled-components';


const Title = styled.h1`
  color: #66e0ff;
  font-size: 30px;
  `
  const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  `


export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <Header>
        <Title>"This site is dedicated to hard working Rick's out there"</Title>
        <iframe width="80%" height="500" src="https://www.youtube.com/embed/p6UPS8HGCkA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </Header>
    </section>
  );
}
