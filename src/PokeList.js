import React, { Component } from 'react'
import PokeItem from './PokeItem.js';

export default class PokeList extends Component {
    
    render() {
        console.log(this.props.sort1)
        const filteredPokemonData = this.props.pokemonData.filter((pokemon) => {
            if(this.props.filter === '') return true;
            if (this.props.filter.toUpperCase() === pokemon.pokemon.toUpperCase()) return true;
            return false
            });

            if(this.props.sort1 === 'ascending'){
                console.log('ascend');
                filteredPokemonData.sort(function(a, b) {

                    return a.id - b.id;
                })
            } else{
                console.log('descend');
                filteredPokemonData.sort(function(a, b) {
                    return b.id - a.id;
                })
            }
        return (
            <div className = 'center row wrap'>
                {filteredPokemonData.map(pokemon => {
                    return <PokeItem pokemon = {pokemon}/>
                })}  
            </div>
        )
    }
}
