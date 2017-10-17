import React, {Component} from 'react';
import png from './bidder-performance.png'

class BidderPerformance extends Component{
    render(){
        return(
            <div>
                <h1>Hello from Bidder performance</h1>
                <br/>
                <img src={png} alt="bidder"/>
            </div>
        )
    }
}

export default BidderPerformance;