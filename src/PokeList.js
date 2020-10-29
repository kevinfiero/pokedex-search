import React, { Component } from 'react'
import PokeItem from './PokeItem.js';

export default class PokeList extends Component {
    
    render() {
        console.log(this.props.sort1)
        console.log(this.props.sort2)
        const filteredPokemonData = this.props.pokemonData.filter((pokemon) => {
            if(this.props.filter === '') return true;
            if (this.props.filter.toUpperCase() === pokemon.pokemon.toUpperCase()) return true;
            return false
            });
        const property = this.props.sort2;
            if(this.props.sort1 === 'ascending'){
                filteredPokemonData.sort(function(a, b) {
                    if(property === 'pokemon' || property === 'type_1'){
                        
                        return a[property].localeCompare(b[property])
                    } else{
                        return a[property] - b[property];
                    }
                })
            } else{
                filteredPokemonData.sort(function(a, b) {
                    if(property === 'pokemon' || property === 'type_1'){
                        return b[property].localeCompare(a[property])
                    } else{
                        return b[property] - a[property];
                    }
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
