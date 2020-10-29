import React, { Component } from 'react'
import fetch from 'superagent';

export default class Fetch extends Component {
    state = {
        quotes: []
    }

    componentDidMount = async () => {
        const response = await fetch.get('http://futuramaapi.herokuapp.com/api/quotes');
        this.setState({ quotes: response.body });
    }

    render() {
        return (
            <>
            <div>
            {
                (this.state.quotes.length === 0) 
                    ? <iframe
                        src='https://media3.giphy.com/media/3oKIPoaRNoYOkBOZKE/giphy.gif?cid=ecf05e47w3xrxgk56hpl1vvqrpdngvxoblptfa692dxyr3y5&rid=giphy.gif'
                        title = 'waiting'
                        width='100%'
                        height = '100%'
                        frameBorder = '0'
                        allowFullScreen/>
                    : JSON.stringify(this.state.quotes)
            }
            </div>
           <div>
                {this.state.quotes.map(quote => 
                    <div>
                        <p>
                            {quote.character}
                        </p>
                    </div>
                    )}
           </div>
            </> 
            
        )
    }
}
