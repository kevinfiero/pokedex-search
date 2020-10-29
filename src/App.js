import React, { Component } from 'react'
import './App.css';
import pokemonData from './pokeData.js';
import Header from './Header.js';
import PokeList from './PokeList.js';
import Searchbar from './Searchbar.js';

export default class App extends Component {
  state = {
    filter: '',
    textString: '',
    sort1: 'ascending',
    sort2: 'pokemon'
  }

  buttonClick = () => {
      this.setState({
          filter: this.state.textString
      })}

  textChange = (e) => {
    this.setState({
        textString: e.target.value
    })}

  sort1Change = (e) => {
    this.setState({
        sort1: e.target.value
    })}

    sort2Change = (e) => {
      this.setState({
          sort2: e.target.value
      })}

  render() {
    return (
      <>
        <Header />
        <div className = 'row background-tan'>
          <Searchbar sort2Change = {this.sort2Change} sort1Change = {this.sort1Change} buttonClick = {this.buttonClick} textChange = {this.textChange} />
          <PokeList sort2 = {this.state.sort2} sort1 = {this.state.sort1} pokemonData = {pokemonData} filter = {this.state.filter} />
        </div>
      </>
    )
  }
}
