import React, { Component } from 'react'

export default class SearchBar extends Component {
    render() {
        return (
            <div id= 'search-bar' className = 'border center column'>
                Search by Name:
               <input type='text' onChange = {this.props.textChange}/>
               <button onClick = {this.props.buttonClick}>Go!</button>
               <select>
                   <option value ='ascending'>Ascending</option>
                   <option value ='descending'>Descending</option>
               </select>
            </div>
        )
    }
}

