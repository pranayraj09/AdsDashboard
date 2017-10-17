import React, {Component} from 'react';
import { Card, Row, Col, Table} from 'reactstrap';


import bidding from '../../../bidding.json';
import './smallTable.css';

class BidderTableView extends Component {
    constructor(props) {
        super(props);


        this.state = {
            bidders: []
        };

    }

    componentDidMount() {
        let bidders = [];

        bidding.list.forEach((bid, index) => {
            if (bidders.find((bidder) => {
                    return bidder['bidder'] === bid['Bidder']
                })) {

                let oldData = bidders.find((bidder) => {
                    return bidder['bidder'] === bid['Bidder']
                });

                oldData["imps"] = oldData["imps"] + Number(bid["Impressions"]);
                oldData["cost"] = oldData["cost"] + Number(bid["Cost"]);
                oldData["bids"] = oldData["bids"] + Number(bid["Bid Requests"]);


            } else {
                bidders.push({
                    bidder: bid['Bidder'],
                    imps: Number(bid["Impressions"]),
                    cost: Number(bid["Cost"]),
                    bids: Number(bid["Bid Requests"])
                });
            }

        });

        this.setState({bidders: bidders});

    }

    render() {
        return (
            <Row style={{width: '100%', marginLeft: 'auto', marginRight: 'auto'}}>
                <Col>
                    <Card className="mini-table">
                        <Table className="small-table" responsive bordered size="sm">
                            <thead>
                            <tr><th colSpan="4" className="mini-table-head">Bidder Information</th></tr>
                            <tr>
                                <th>Bidder</th>
                                <th>Bid Requests sent</th>
                                <th>Impressions made</th>
                                <th>$ Paid</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                this.state.bidders.map((data, i2) =>

                                    <tr key={i2}>
                                        <td>{data['bidder']}</td>
                                        <td>{data['bids'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                                        <td>{data['imps'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                                        <td>{data['cost'].toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                                    </tr>
                                )
                            }
                            </tbody>
                        </Table>
                    </Card>
                </Col>
            </Row>
        )
    }
}

export default BidderTableView;