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
    pokemonData: [],
    pageNumber: 1
  }

  fetchPokemon = async () => {
    const response = await fetch.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.filter}&sort=${this.state.sort2}&direction=${this.state.sort1}&page=${this.state.pageNumber}&perPage=20`);
    await this.setState({ 
      pokemonData: response.body.results,
      count: response.body.count
    });
  }

  fetchPokemonByID = async () => {
    const response = await fetch.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex/${this.state.id}`);
    await this.setState({ 
      pokemonData: response.body.results,
      count: response.body.count
    });
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
  }

  sort1Change = async (e) => {
 
    await this.setState({
        sort1: e.target.value
    })
    await this.fetchPokemon();
  }

  sort2Change = async (e) => {
 
    await this.setState({
        sort2: e.target.value
    })
    await this.fetchPokemon();
  }

  handleIncrement = async () => {
    await this.setState({
      pageNumber: this.state.pageNumber + 1
    })
    await this.fetchPokemon();
  }
  handleDecrement = async () => {
    await this.setState({
      pageNumber: this.state.pageNumber - 1
    })
    await this.fetchPokemon();
  }

  render() {
    return (
      <>
        <div className = 'center row'>
        <button className = 'center navButton' onClick={this.handleDecrement} disabled={this.state.pageNumber === 1}>Previous</button>
        <div>{this.state.pageNumber}</div>
        <button className = 'center navButton' onClick={this.handleIncrement} disabled ={this.state.pageNumber === Math.ceil(this.state.count / 20)}>Next</button>
        </div>
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
