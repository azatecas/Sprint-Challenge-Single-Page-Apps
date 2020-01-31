import React from "react";
import Header from "./components/Header.js";
import { Route, NavLink } from 'react-router-dom';

import WelcomePage from './components/WelcomePage';
import CharacterList from './components/CharacterList';
import SearchForm from './components/SearchForm';

export default function App() {
  return (
    <main>
      <Header />
      <Route exact path="/">
        <WelcomePage/>
      </Route>
      <Route exact path="/characters">
        <SearchForm></SearchForm>
        <CharacterList/>
      </Route>
      
    </main>
  );
}
