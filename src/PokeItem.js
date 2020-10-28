import React, { Component } from 'react'

export default class PokeItem extends Component {
    render() {
        return (
            <section className = 'column center border' style={{backgroundColor: "purple"}}>
                <h2>Bulbasaur</h2>
                <img src = 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png' />
                <div className = 'row'>
                    <ul> Stats:
                        <li>HP: 45</li>
                        <li>Attack: 49</li>
                        <li>Defense: 49</li>
                        <li>Speed: 45</li>
                    </ul>
                    <div className = 'column'>
                        <ul> Type(s):
                            <li>Grass</li>
                            <li>Poison</li>
                        </ul>
                        <ul> Shape:
                            <li>Quadruped</li>
                        </ul>
                    </div>
                </div>
            </section>
        )
    }
}
