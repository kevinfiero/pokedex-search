import React, { Component } from 'react'
import './App.css';
import pokemonData from './pokeData.js';
import Header from './Header.js';
import PokeList from './PokeList.js';
import Searchbar from './Searchbar.js';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Searchbar />
        <PokeList pokemonData = {pokemonData} />
      </div>
    )
  }
}
