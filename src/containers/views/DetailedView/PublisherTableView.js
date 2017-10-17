import React, {Component} from 'react';
import {Card, Table, Row, Col} from 'reactstrap';


import bidding from '../../../bidding.json';
import './smallTable.css';

class PublisherTableView extends Component {
    constructor(props) {
        super(props);


        this.state = {
            publisher: []
        };

    }

    componentDidMount() {
        let publisher = [];

        bidding.list.forEach((bid, index) => {
            if (publisher.find((bidder) => {
                    return bidder['publisher'] === bid['Publisher']
                })) {

                let oldData = publisher.find((bidder) => {
                    return bidder['publisher'] === bid['Publisher']
                });

                oldData["imps"] = oldData["imps"] + Number(bid["Impressions"]);
                oldData["cost"] = oldData["cost"] + Number(bid["Cost"]);
                oldData["bids"] = oldData["bids"] + Number(bid["Bid Requests"]);


            } else {
                publisher.push({
                    publisher: bid['Publisher'],
                    imps: Number(bid["Impressions"]),
                    cost: Number(bid["Cost"]),
                    bids: Number(bid["Bid Requests"])
                });
            }

        });

        this.setState({publisher: publisher});

    }

    render() {
        return (
            <Row style={{width: '100%', marginLeft: 'auto', marginRight: 'auto'}}>
                <Col>
                    <Card className="mini-table">
                        <Table className="small-table" responsive bordered size="sm">
                            <thead>
                            <tr><th colSpan="4" className="mini-table-head">Publisher Information</th></tr>
                            <tr>
                                <th>Publisher</th>
                                <th>Bid Received</th>
                                <th>Impressions Produced</th>
                                <th>$ Earned</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                this.state.publisher.map((data, i2) =>

                                    <tr key={i2}>
                                        <td>{data['publisher']}</td>
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

export default PublisherTableView;