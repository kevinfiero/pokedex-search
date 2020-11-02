import React, { Component } from 'react';
import PokeItem from './PokeItem.js';
import MoreDetails from './MoreDetails.js';
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
      <>{
        (this.state.pokemonData === undefined) 
            ? <iframe
                src='https://i.giphy.com/media/3oKIPoaRNoYOkBOZKE/giphy.webp'
                title = 'waiting'
                width = '500px'
                height = '500px'
                frameBorder = '0'
                allowFullScreen/>
            :
        <div className = 'column background-tan center'>
          <Link className = 'nav-button' to="/list" ><button>Return</button></Link>
          <PokeItem pokemon = {this.state.pokemonData}/>
          <MoreDetails pokemon = {this.state.pokemonData}/>
        </div>
        }
      </>
    )
  }
}
