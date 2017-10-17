import React, { Component } from 'react';
import QuickFacts from "./QuickFacts";
import QuickChart from "./QuickChart";
import './Quickview.css'

class QuickView extends Component {
    render() {
        return (
            <div className="quickview-content container-fluid">
                <QuickFacts/>
                <QuickChart/>
            </div>
        )
    }
}

export default QuickView;