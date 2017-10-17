import React, { Component } from 'react';
import { Card, ListGroup, ListGroupItem, Collapse} from 'reactstrap';
import './sidebar.css';
import { Link } from 'react-router-dom';
import SidebarFooter from "./sidebar-footer";

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false };
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }

    render() {
        return (
            <div>
                <Card className="sidebar">
                    <ListGroup>
                        <ListGroupItem style={{backgroundColor: '#29363d', color: 'white', borderRadius: '0px'}}>Dashboard &nbsp; <i className="fa fa-dashboard"> </i></ListGroupItem>

                        <ListGroupItem className="list-item">
                            <Link to="/">Quick View </Link>
                        </ListGroupItem>

                        <ListGroupItem className="list-item">
                            <Link to="/detail-view">Detailed View </Link>
                        </ListGroupItem>

                        <ListGroupItem className="list-item">
                            <Link to="/comparision">Compare</Link>
                        </ListGroupItem>

                        <ListGroupItem className="list-item">
                            <Link to="/locations">Locations</Link>
                        </ListGroupItem>

                        <ListGroupItem className="list-item-parent" onClick={this.toggle}>Performance &nbsp;<i className="fa fa-caret-down"> </i></ListGroupItem>
                        <Collapse style={{backgroundColor : '#414F55'}} isOpen={this.state.collapse}>
                            <ListGroup className="list-item-children">
                                <ListGroupItem className="list-item-child-item">
                                    <Link to="/publisher-performance">Publishers</Link>
                                </ListGroupItem>
                                <ListGroupItem className="list-item-child-item">
                                    <Link to="/bidder-performance">Bidders</Link>
                                </ListGroupItem>
                                <ListGroupItem className="list-item-child-item">Bids</ListGroupItem>
                                <ListGroupItem className="list-item-child-item">Impressions</ListGroupItem>
                                <ListGroupItem className="list-item-child-item">Cost</ListGroupItem>
                            </ListGroup>
                        </Collapse>
                        <ListGroupItem style={{backgroundColor: '#4B5A62', color: 'white', borderRadius: '0px'}}>
                            <Link to="/notes">Notes</Link>
                        </ListGroupItem>
                    </ListGroup>
                </Card>
                <SidebarFooter/>
            </div>
        )
    }
}

export default Sidebar;
