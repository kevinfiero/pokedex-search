import React, { Component } from 'react'
import PokeItem from './PokeItem.js';

export default class PokeList extends Component {
    
    render() {
        const filteredPokemonData = this.props.pokemonData;
        console.log(filteredPokemonData);
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
            <div>
            {
                (filteredPokemonData.length === 0) 
                    ? <iframe
                        src='https://media3.giphy.com/media/3oKIPoaRNoYOkBOZKE/giphy.gif?cid=ecf05e47w3xrxgk56hpl1vvqrpdngvxoblptfa692dxyr3y5&rid=giphy.gif'
                        title = 'waiting'
                        width = '500px'
                        height = '500px'
                        frameBorder = '0'
                        allowFullScreen/>
                    :
                    <div className = 'center row wrap'>
                        {filteredPokemonData.map((pokemon, i) => {
                            return <PokeItem key = {i} pokemon = {pokemon}/>
                        })}  
                    </div>
            }
            </div>

        )
    }
}
