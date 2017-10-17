import React, { Component } from 'react';
import { Row, Col, Card, CardTitle, CardText } from 'reactstrap';
import bidding from '../../../bidding.json';
import './QuickFacts.css';

class QuickFacts extends Component {

    constructor(props){
        super(props);

        this.state = {
            totalBidders: 0,
            totalPublisher: 0,
            totalBids: 0,
            totalImps: 0,
            cost: 0
        };
    }

    componentDidMount() {

        let cost=0,
            totalImps=0,
            totalBids=0,
            totalBidders,
            totalPublisher,
            publisher=new Set(),
            bidders=new Set();

        bidding.list.forEach((bid)=>{
            cost+=bid['Cost'];
            totalImps+=bid['Impressions'];
            totalBids+=bid['Bid Requests'];
            publisher.add(bid['Publisher']);
            bidders.add(bid['Bidder']);
        });

        totalBidders=bidders.size;
        totalPublisher=publisher.size;

        this.setState({ cost, totalImps, totalBids, totalBidders, totalPublisher });
    }

    render() {
        return (
            <Row className="quick-facts">
                <Col className="cards col col-lg-3 col-md-6 col-sm-12">
                    <Card className="quick-cards primary">
                        <CardTitle>Bidders : { this.state.totalBidders } </CardTitle>
                        <CardTitle>Publisher: { this.state.totalPublisher } </CardTitle>
                    </Card>
                </Col>
                <Col className="cards col col-lg-3 col-md-6  col-sm-12">
                    <Card className="quick-cards info">
                        <CardTitle>Total Bids</CardTitle>
                        <CardText>{ this.state.totalBids.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }</CardText>
                    </Card>
                </Col>
                <Col className="cards col col-lg-3 col-md-6  col-sm-12">
                    <Card className="quick-cards warning">
                        <CardTitle>Total Impressions</CardTitle>
                        <CardText>{ this.state.totalImps.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }</CardText>
                    </Card>
                </Col>
                <Col className="cards col col-lg-3 col-md-6  col-sm-12">
                    <Card className="quick-cards danger">
                        <CardTitle>Cost</CardTitle>
                        <CardText>{ this.state.cost.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }</CardText>
                    </Card>
                </Col>
            </Row>
        )
    }
}

export default QuickFacts;