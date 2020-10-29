import React, { Component } from 'react'

export default class Sort extends Component {
    render() {

        return (
            <div id='drop' className = 'border'>
            <span>
            <label>Sort by </label>
            <select onChange = {this.props.sort2Change}>
                <option value ='pokemon'>Name</option>
                <option value ='type_1'>Primary Type</option>
                <option value ='attack'>Attack</option>
                <option value ='defense'>Defense</option>
            </select>
            <label> in</label>
            </span>
            <select onChange = {this.props.sort1Change}>
                <option value ='ascending'>Ascending</option>
                <option value ='descending'>Descending</option>
            </select>
            <label>order</label>
       </div>
        )
    }
}
