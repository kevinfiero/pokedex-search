import React, { Component } from 'react'

export default class PokeItem extends Component {
    render() {
        return (
            <section>
                <h2>Bulbasaur</h2>
                <img src = 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png' />
                <ul> Stats:
                    <li>HP: 45</li>
                    <li>Attack: 49</li>
                    <li>Defense: 49</li>
                    <li>Speed: 45</li>
                </ul>
                <ul> Type(s):
                    <li>Grass</li>
                    <li>Poison</li>
                </ul>
                <ul> Shape:
                    <li>Quadruped</li>
                </ul>


            </section>
        )
    }
}
