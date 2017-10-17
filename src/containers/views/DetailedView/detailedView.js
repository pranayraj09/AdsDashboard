import React, {Component} from 'react';
import { Card, Table, Row, Col} from 'reactstrap';
import './detailedView.css'

import bidding from '../../../bidding.json';
import PublisherTableView from "./PublisherTableView";
import BidderTableView from "./BidderTableView";

class DetailedView extends Component{
    constructor(props){
        super(props);


        this.state ={
            bidding : bidding,
            publishers: []
        };

    }

    componentDidMount() {

    }

    render(){
        return(
            <div className="container-fluid detailed-view-content">
                <Card>
                    <BidderTableView />
                </Card>
                <br/>
                <Card>
                    <PublisherTableView />
                </Card>
                <br/>
                <Row className="big-table-container">
                    <Col>
                        <Card>
                            <Table bordered className="big-table">
                                <thead>
                                <tr><th colSpan="7" className="table-head">All Data</th></tr>
                                <tr>
                                    <th style={{width: '10%'}}>Date</th>
                                    <th style={{width: '15%'}}>Publisher</th>
                                    <th style={{width: '15%'}}>Bidder</th>
                                    <th style={{width: '10%'}}>Country</th>
                                    <th style={{width: '20%'}}>Bid Requests</th>
                                    <th style={{width: '20%'}}>Impressions</th>
                                    <th style={{width: '10%'}}>Cost</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    this.state.bidding.list.map((data, index) =>
                                        <tr key={index}>
                                            <td style={{width: '10%'}}>{data['Date']}</td>
                                            <td style={{width: '15%'}}>{data['Publisher']}</td>
                                            <td style={{width: '15%'}}>{data['Bidder']}</td>
                                            <td style={{width: '10%'}}>{data['Country']}</td>
                                            <td style={{width: '20%'}}>{data['Bid Requests']}</td>
                                            <td style={{width: '20%'}}>{data['Impressions']}</td>
                                            <td style={{width: '10%'}}>{data['Cost']}</td>
                                        </tr>
                                    )
                                }
                                </tbody>
                            </Table>
                        </Card>
                    </Col>
                </Row>

            </div>

        )
    }
}

export default DetailedView;