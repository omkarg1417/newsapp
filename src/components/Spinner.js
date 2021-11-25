import React, { Component } from 'react'
import loader from '../loader.gif'

export class Spinner extends Component {
    
    render() {
        return (
            <div className="text-center my-4">
                <img src={loader} alt="loading..."></img>
            </div>
        )
    }
}

export default Spinner;
