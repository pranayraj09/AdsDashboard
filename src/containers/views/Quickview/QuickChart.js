import React, { Component } from 'react';
import {Row, Col, Card } from 'reactstrap';
import bidding from '../../../bidding.json';
import Chart from 'chart.js';
import './QuickChart.css';

class QuickChart extends Component {

    constructor(props){
        super(props);

        this.state = {
        };
    }

    componentDidMount() {
        let ctx = document.getElementById("bidsVsImpressions").getContext("2d");
        let data = {
            labels  : [],
            datasets: [
                {
                    label               : 'Bids Requests',
                    borderColor         : '#71d72b',
                    data                : []
                },
                {
                    label               : 'Impressions',
                    borderColor         : '#9886d2',
                    data                : []
                }
            ]
        };

        bidding.list.forEach((bid)=>{
            data.labels.push(bid['Date']);
            data.datasets[0].data.push(bid['Bid Requests']); // bids
            data.datasets[1].data.push(bid['Impressions']); // impressions
        });

        new Chart(ctx,{
            type: 'line',
            data: data
        });
    }

    render() {
        return (
            <Row>
                <Col>
                    <Card>
                        <div className="card-body">
                            <div className="chart-head">  Bids Vs Impressions  </div>
                            <div className="bidVsImpression-chart-container">
                                <canvas id="bidsVsImpressions"></canvas>
                            </div>
                        </div>
                    </Card>
                </Col>
            </Row>
        )
    }
}

export default QuickChart;