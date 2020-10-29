import React, { Component } from 'react'

export default class Sort extends Component {
    render() {

        const property = this.props.sort2;
        const data = this.props.filteredPokemonData;
            if(this.props.sort1 === 'ascending'){
                data.sort(function(a, b) {
                    if(property === 'pokemon' || property === 'type_1'){
                        
                        return a[property].localeCompare(b[property])
                    } else{
                        return a[property] - b[property];
                    }
                })
            } else{
                data.sort(function(a, b) {
                    if(property === 'pokemon' || property === 'type_1'){
                        return b[property].localeCompare(a[property])
                    } else{
                        return b[property] - a[property];
                    }
                })
            }
        return (
            <div>
                
            </div>
        )
    }
}
