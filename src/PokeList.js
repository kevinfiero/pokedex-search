import React, { Component } from 'react'
import PokeItem from './PokeItem.js';

export default class PokeList extends Component {
    
    render() {
        const filteredPokemonData = this.props.pokemonData;
        return (
            filteredPokemonData.map(pokemon => {
                return <PokeItem pokemon = {pokemon}/>
            })   
        )
    }
}
