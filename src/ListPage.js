import React, { Component } from 'react';
import PokeList from './PokeList.js';
import Searchbar from './Searchbar.js';
import Sort from './Sort.js';
import fetch from 'superagent';


export default class App extends Component {
  state = {
    filter: '',
    sort1: 'ascending',
    sort2: 'pokemon',
    pokemonData: []
  }

  fetchPokemon = async () => {
    const response = await fetch.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.filter}&perPage=1000`);
    this.setState({ pokemonData: response.body.results });
  }

  componentDidMount = async () => {
    this.fetchPokemon();
  }

  buttonClick = async () => {
      this.fetchPokemon();
    }

  textChange = (e) => {
    this.setState({
      
        filter: e.target.value
    })
    console.log(this.state.filter);
  }

  sort1Change = (e) => {
    this.setState({
        sort1: e.target.value
    })}

    sort2Change = (e) => {
      this.setState({
          sort2: e.target.value
      })}

  render() {
    return (
      <>
        <div className = 'row background-tan'>
        <div id= 'search-bar' className = 'border center column even'>
          <Searchbar buttonClick = {this.buttonClick} textChange = {this.textChange} />
          <Sort sort2Change = {this.sort2Change} sort1Change = {this.sort1Change} />
        </div>
          <PokeList sort2 = {this.state.sort2} sort1 = {this.state.sort1} pokemonData = {this.state.pokemonData} filter = {this.state.filter} />
        </div>
      </>
    )
  }
}
