import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <>
                <header className = 'center border row'>
                    <div className = 'twenty'>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/list" >List</Link>
                            </li>
                            <li>
                                <Link to="/fetch" >Fetch</Link>
                            </li>
                        </ul>
                    </div>
                    <div className = 'sixty'>
                        <h1>Pokémon</h1>
                    </div>
                    <div className = 'twenty'>
                    </div>
                </header>  
            </>
        )
    }
}
