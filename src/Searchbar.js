import React, { Component } from 'react'

export default class SearchBar extends Component {
    render() {
        return (
            <div id= 'search-bar' className = 'border center column'>
                Search by Name:
               <input type='text' onChange = {this.props.textChange}/>
               <button onClick = {this.props.buttonClick}>Go!</button>
               <select onChange = {this.props.sort1Change}>
                   <option value ='ascending'>Ascending</option>
                   <option value ='descending'>Descending</option>
               </select>
               <select onChange = {this.props.sort2Change}>
                    <option value ='pokemon'>Pokemon</option>
                    <option value ='type_1'>Primary Type</option>
                    <option value ='attack'>Attack</option>
                    <option value ='defense'>Defense</option>
               </select>
            </div>
        )
    }
}

