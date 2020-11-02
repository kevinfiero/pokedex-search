import React, { Component } from 'react'

export default class MoreDetails extends Component {
    render() {
        const hide = (str) => {
            if(str === 'NA'){return 'none'}
        }
        return (
            <div>
                <section id = 'more-details' className = 'column center border capital' style={{backgroundColor: this.props.pokemon.color_1}}>
                    <h3>Additional Details:</h3>
                    <table >
                        <tbody>
                            <tr>
                                <th className = {hide(this.props.pokemon.weight)}>Weight</th>
                                <th className = {hide(this.props.pokemon.height)}>Height</th>
                                <th className = {hide(this.props.pokemon.species_id)}>ID</th>
                                <th className = {hide(this.props.pokemon.egg_group_1)}>Egg Group 1</th>
                                <th className = {hide(this.props.pokemon.egg_group_2)}>Egg Group 2</th>
                            </tr>
                            <tr>
                                <td className = {hide(this.props.pokemon.weight)}>{this.props.pokemon.weight}</td>
                                <td className = {hide(this.props.pokemon.height)}>{this.props.pokemon.height}</td>
                                <td className = {hide(this.props.pokemon.species_id)}>{this.props.pokemon.species_id}</td>
                                <td className = {hide(this.props.pokemon.egg_group_1)}>{this.props.pokemon.egg_group_1}</td>
                                <td className = {hide(this.props.pokemon.egg_group_2)}>{this.props.pokemon.egg_group_2}</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </div>
        )
    }
}
