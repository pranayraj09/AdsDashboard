import React, {Component} from 'react';
import png from './location.png'

class Location extends Component{
    render(){
        return(
            <div>
                <h1>Hello from locations</h1>
                <br/>
                <img src={png} alt="Locations"/>
            </div>
        )
    }
}

export default Location;