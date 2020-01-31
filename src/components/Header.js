import React from "react";
import SearchForm from './SearchForm';
import { Route, NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <ul>
        <NavLink to="/"><li>Home</li></NavLink>
        <NavLink to="/characters"><li>Characters</li></NavLink>
      </ul>
    </header>
  );
}

