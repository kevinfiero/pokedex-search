import React, { Component } from 'react'
import PokeItem from './PokeItem.js';

export default class PokeList extends Component {
    
    render() {
        const filteredPokemonData = this.props.pokemonData.filter((pokemon) => {
            if(this.props.filter === '') return true;
            if (this.props.filter.toUpperCase() === pokemon.pokemon.toUpperCase()) return true;
            return false
            });
        return (
            <div className = 'center row wrap'>
                {filteredPokemonData.map(pokemon => {
                    return <PokeItem pokemon = {pokemon}/>
                })}  
            </div>
        )
    }
}
