import React, {Component} from 'react';
import png from './publisher-pefrormance.png'

class PublisherPerformance extends Component{
    render(){
        return(
            <div>
                <h1>Hello from Publisher performance</h1>
                <br/>
                <img src={png} alt="publisher"/>
            </div>
        )
    }
}

export default PublisherPerformance;