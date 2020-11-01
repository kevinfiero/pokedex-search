import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class PokeItem extends Component {

    render() {
        const hide = (str) => {
            if(str === 'NA'){return 'hidden'}
        }
        return (
            <Link to={`/pokemon/${this.props.pokemon.pokemon}`}>
            <section className = 'column center border capital' style={{backgroundColor: this.props.pokemon.color_1}}>
                <h2>{this.props.pokemon.pokemon}</h2>
                <img src = {this.props.pokemon.url_image} alt = {this.props.pokemon.pokemon} />
                <div className = 'row'>
                    <ul> Stats:
                        <li>HP: {this.props.pokemon.hp}</li>
                        <li>Attack: {this.props.pokemon.attack}</li>
                        <li>Defense: {this.props.pokemon.defense}</li>
                        <li>Speed: {this.props.pokemon.speed}</li>
                    </ul>
                    <div className = 'column'>
                        <ul> Types:
                            <li>{this.props.pokemon.type_1}</li>
                            <li className = {hide(this.props.pokemon.type_2)}>{this.props.pokemon.type_2}</li>
                        </ul>
                        <ul className = {hide(this.props.pokemon.shape)}> Shape:
                            <li>{this.props.pokemon.shape}</li>
                        </ul>
                    </div>
                </div>
            </section>
            </Link>
        )
    }
}