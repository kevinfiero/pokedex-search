import React, { Component } from 'react';
import PokeList from './PokeList.js';
import PokeItem from './PokeItem.js';
import Searchbar from './Searchbar.js';
import Sort from './Sort.js';
import fetch from 'superagent';
import { Link } from 'react-router-dom';

export default class DetailPage extends Component {
  state = {
    filter: '',
    pokemonData: []
  }

  fetchPokemon = async () => {
    const response = await fetch.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex/${this.props.match.params.id}`);
    console.log(response);
    await this.setState({ pokemonData: response.body});
    console.log(response.body);
  }

  componentDidMount = async () => {
    console.log('test');  
    await this.fetchPokemon();
    }

  render() {
    return (
      <>
        <div className = 'column background-tan center'>
          <Link to="/list" className = 'navButton'><button>Return</button></Link>
          <PokeItem pokemon = {this.state.pokemonData}/>
        </div>
      </>
    )
  }
}
