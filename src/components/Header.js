import React from "react";

import { Route, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const MyLi = styled.li`
list-style: none;
font-size: 30px;
color: #66e0ff;
`

const MyUl = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <MyUl >
        <NavLink to="/"><MyLi>Home</MyLi></NavLink>
        <NavLink to="/characters"><MyLi>Characters</MyLi></NavLink>
      </MyUl >
    </header>
  );
}

