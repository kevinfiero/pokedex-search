import React, { Component } from 'react'
import PokeItem from './PokeItem.js';

export default class PokeList extends Component {
    
    render() {
        return (
            <div>
            {
                (this.props.pokemonData.length === 0) 
                    ? <iframe
                        src='https://i.giphy.com/media/3oKIPoaRNoYOkBOZKE/giphy.webp'
                        title = 'waiting'
                        width = '500px'
                        height = '500px'
                        frameBorder = '0'
                        allowFullScreen/>
                    :
                    <div className = 'center row wrap'>
                        {this.props.pokemonData.map((pokemon, i) => {
                            return <PokeItem key = {i} pokemon = {pokemon}/>
                        })}  
                    </div>
            }
            </div>

        )
    }
}
