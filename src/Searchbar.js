import React, { Component } from 'react'


export default class SearchBar extends Component {
    render() {
        return (
                <div id='box' className = 'border'>
                    <label>Search By Name:</label>
                    <input type='text' onChange = {this.props.textChange}/>
                    <button onClick = {this.props.buttonClick}>Go!</button>
                </div>
        )
    }
}

